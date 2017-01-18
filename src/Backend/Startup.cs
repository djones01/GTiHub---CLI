using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Backend.Helpers;
using Backend.Models.EntityModels;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.AspNetCore.Mvc;
using Backend.Helpers.FileMapping;
using Serilog;

namespace Backend
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            // Create general logger for the application
            Log.Logger = new LoggerConfiguration().WriteTo.RollingFile(
                        env.ContentRootPath + "/Logs/app.log",
                        outputTemplate:
                        "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} {SourceContext} [{Level}] {Message}{NewLine}{Exception}")
                    .CreateLogger();

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        private readonly object _hostingEnvironment;
        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var corsBuilder = new CorsPolicyBuilder();
            corsBuilder.AllowAnyHeader();
            corsBuilder.AllowAnyMethod();
            corsBuilder.AllowAnyOrigin(); // For anyone access.
            //corsBuilder.WithOrigins("http://localhost:56573"); // for a specific url. Don't add a forward slash on the end!
            corsBuilder.AllowCredentials();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", corsBuilder.Build());
            });

            services.AddMvc();

            var connection = Configuration.GetConnectionString("DefaultConnection");

            services.AddEntityFrameworkSqlServer().AddDbContext<GTiHubContext>(options => {
                options.UseSqlServer(connection);
            });

            // Register the Identity services.
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<GTiHubContext>()
                .AddDefaultTokenProviders();

            // Add the TransformHelpers service
            services.TryAddTransient<IProjectHelpers, ProjectHelpers>();
            services.TryAddTransient<ITransformHelpers, TransformHelpers>();
            services.TryAddTransient<IFileHelpers, FileHelpers>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors("AllowAll");
            app.UseDeveloperExceptionPage();

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseIdentity();

            app.UseMvcWithDefaultRoute();
        }
    }
}
