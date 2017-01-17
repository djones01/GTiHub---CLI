using Backend.Models.EntityModels;
using Backend.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Helpers
{
    /// <summary>
    /// Interface for TransformHelpers
    /// </summary>
    public interface IProjectHelpers
    {
        ProjectViewModel GetProjectViewModel(Project project);
    }

    public class ProjectHelpers : IProjectHelpers
    {       
        private readonly GTiHubContext _dbContext;

        public ProjectHelpers(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        public ProjectViewModel GetProjectViewModel(Project project)
        {
            var projectViewModel = new ProjectViewModel
            {
                Name = project.Name,
                Description = project.Description,
                Client = project.Client,
                Project_Type = project.Project_Type
            };
          
            // Get maps, source, and targets for the project
            foreach(var projectMap in project.ProjectMaps)
            {
                projectViewModel.Maps.Add(this._dbContext.Maps.Find(projectMap.MapId));
            }
            foreach (var projectSource in project.ProjectSources)
            {
                projectViewModel.Sources.Add(this._dbContext.Sources.Find(projectSource.SourceId));
            }
            foreach (var projectTarget in project.ProjectTargets)
            {
                projectViewModel.Targets.Add(this._dbContext.Targets.Find(projectTarget.TargetId));
            }

            return projectViewModel; ;
        }
    }
}
