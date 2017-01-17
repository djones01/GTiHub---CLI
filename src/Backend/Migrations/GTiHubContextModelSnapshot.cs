using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Backend.Models.EntityModels;

namespace Backend.Migrations
{
    [DbContext(typeof(GTiHubContext))]
    partial class GTiHubContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.EntityModels.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<int?>("ClientId");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Modified_By");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Title");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Client", b =>
                {
                    b.Property<int>("ClientId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Industry");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ClientId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Condition", b =>
                {
                    b.Property<int>("ConditionId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Chain_Operation");

                    b.Property<string>("Cond_Value");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Left_Paren");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Operation");

                    b.Property<string>("Right_Paren");

                    b.Property<int>("SeqNum");

                    b.Property<int>("SourceFieldId");

                    b.Property<int>("TransformationId");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ConditionId");

                    b.HasIndex("SourceFieldId");

                    b.HasIndex("TransformationId");

                    b.ToTable("Conditions");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Map", b =>
                {
                    b.Property<int>("MapId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("MapId");

                    b.ToTable("Maps");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ClientId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<string>("Project_Type");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectId");

                    b.HasIndex("ClientId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectMap", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("MapId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectId", "MapId");

                    b.HasIndex("MapId");

                    b.ToTable("ProjectMaps");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectSource", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("SourceId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectId", "SourceId");

                    b.HasIndex("SourceId");

                    b.ToTable("ProjectSources");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectTarget", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("TargetId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectId", "TargetId");

                    b.HasIndex("TargetId");

                    b.ToTable("ProjectTargets");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Rule", b =>
                {
                    b.Property<int>("RuleId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Alt_Value");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Rule_Operation");

                    b.Property<string>("Rule_Value");

                    b.Property<int>("TargetFieldId");

                    b.Property<int>("TransformationId");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("RuleId");

                    b.HasIndex("TargetFieldId");

                    b.HasIndex("TransformationId")
                        .IsUnique();

                    b.ToTable("Rules");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.RuleSourceField", b =>
                {
                    b.Property<int>("RuleSourceFieldId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Append");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Custom_Format");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Prepend");

                    b.Property<int>("RuleId");

                    b.Property<int>("SeqNum");

                    b.Property<int>("SourceFieldId");

                    b.Property<bool>("Trim");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("RuleSourceFieldId");

                    b.HasIndex("RuleId");

                    b.HasIndex("SourceFieldId");

                    b.ToTable("RuleSourceFields");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Source", b =>
                {
                    b.Property<int>("SourceId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("SourceId");

                    b.ToTable("Sources");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.SourceField", b =>
                {
                    b.Property<int>("SourceFieldId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Datatype");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<int>("SeqNum");

                    b.Property<int>("SourceId");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("SourceFieldId");

                    b.HasIndex("SourceId");

                    b.ToTable("SourceFields");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Target", b =>
                {
                    b.Property<int>("TargetId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("TargetId");

                    b.ToTable("Targets");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.TargetField", b =>
                {
                    b.Property<int>("TargetFieldId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Datatype");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<int>("SeqNum");

                    b.Property<int>("TargetId");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("TargetFieldId");

                    b.HasIndex("TargetId");

                    b.ToTable("TargetFields");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Transformation", b =>
                {
                    b.Property<int>("TransformationId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<int>("MapId");

                    b.Property<string>("Modified_By");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("TransformationId");

                    b.HasIndex("MapId");

                    b.ToTable("Transformations");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.UserProjectSec", b =>
                {
                    b.Property<int>("UserProjSecId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Access_Level");

                    b.Property<bool>("Active_On_Project");

                    b.Property<DateTime>("Added_Date");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<int>("ProjectId");

                    b.Property<int>("UserId");

                    b.Property<string>("UserId1");

                    b.Property<byte[]>("Version")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("UserProjSecId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId1");

                    b.ToTable("UserProjectSecs");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ApplicationUser", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Client")
                        .WithMany("Users")
                        .HasForeignKey("ClientId");
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Condition", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.SourceField", "SourceField")
                        .WithMany("Conditions")
                        .HasForeignKey("SourceFieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Transformation", "Transformation")
                        .WithMany("Conditions")
                        .HasForeignKey("TransformationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Project", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Client", "Client")
                        .WithMany("Projects")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectMap", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Map", "Map")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Project", "Project")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectSource", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Project", "Project")
                        .WithMany("ProjectSources")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Source", "Source")
                        .WithMany("ProjectSources")
                        .HasForeignKey("SourceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.ProjectTarget", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Project", "Project")
                        .WithMany("ProjectTargets")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Target", "Target")
                        .WithMany("ProjectTargets")
                        .HasForeignKey("TargetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Rule", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.TargetField", "TargetField")
                        .WithMany("Rules")
                        .HasForeignKey("TargetFieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.Transformation", "Transformation")
                        .WithOne("Rule")
                        .HasForeignKey("Backend.Models.EntityModels.Rule", "TransformationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.RuleSourceField", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Rule", "Rule")
                        .WithMany("RuleSourceFields")
                        .HasForeignKey("RuleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.SourceField", "SourceField")
                        .WithMany("RuleSourceFields")
                        .HasForeignKey("SourceFieldId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.SourceField", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Source", "Source")
                        .WithMany("SourceFields")
                        .HasForeignKey("SourceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.TargetField", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Target", "Target")
                        .WithMany("TargetFields")
                        .HasForeignKey("TargetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.Transformation", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Map", "Map")
                        .WithMany("Transformations")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.EntityModels.UserProjectSec", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.Project", "Project")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ApplicationUser", "User")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("UserId1");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Backend.Models.EntityModels.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.EntityModels.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
