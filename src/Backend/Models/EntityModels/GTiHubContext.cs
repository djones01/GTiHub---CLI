namespace Backend.Models.EntityModels
{
    #region

    using System;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Http;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using System.Reflection;
    using System.Collections.Generic;

    #endregion

    public class GTiHubContext : IdentityDbContext<ApplicationUser>
    {
        public GTiHubContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }

        public DbSet<Condition> Conditions { get; set; }

        public DbSet<Map> Maps { get; set; }

        public DbSet<ProjectMap> ProjectMaps { get; set; }

        public DbSet<Project> Projects { get; set; }

        public DbSet<ProjectSource> ProjectSources { get; set; }

        public DbSet<ProjectTarget> ProjectTargets { get; set; }

        public DbSet<Rule> Rules { get; set; }

        public DbSet<RuleSourceField> RuleSourceFields { get; set; }

        public DbSet<SourceField> SourceFields { get; set; }

        public DbSet<Source> Sources { get; set; }

        public DbSet<TargetField> TargetFields { get; set; }

        public DbSet<Target> Targets { get; set; }

        public DbSet<Transformation> Transformations { get; set; }

        public DbSet<UserProjectSec> UserProjectSecs { get; set; }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public override int SaveChanges()
        {
            this.LogDateAndUser();
            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            this.LogDateAndUser();
            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ProjectMap>().HasKey(t => new { t.ProjectId, t.MapId });
            modelBuilder.Entity<ProjectSource>().HasKey(t => new { t.ProjectId, t.SourceId });
            modelBuilder.Entity<ProjectTarget>().HasKey(t => new { t.ProjectId, t.TargetId });
        }

        private void LogDateAndUser()
        {
            var entities =
                this.ChangeTracker.Entries()
                    .Where(x => x.Entity is ILoggingEntity
                            && ((x.State == EntityState.Added) || (x.State == EntityState.Modified)));

            var currentUser = "Anonymous";

            foreach (var entity in entities)
            {
                if (entity.State == EntityState.Added)
                {
                    ((ILoggingEntity)entity.Entity).Creation_Date = DateTime.Now;
                    ((ILoggingEntity)entity.Entity).Created_By = currentUser;
                }

                ((ILoggingEntity)entity.Entity).Date_Modified = DateTime.Now;
                ((ILoggingEntity)entity.Entity).Modified_By = currentUser;
            }
        }
    }
}