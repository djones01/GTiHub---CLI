namespace Backend.Controllers
{
    #region

    using System.Collections.Generic;
    using System.Linq;

    using Microsoft.AspNetCore.Mvc;
    using Backend.Models.EntityModels;
    using Backend.Models;
    using Models.ViewModels;
    using Helpers;

    #endregion

    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly GTiHubContext _dbContext;
        private readonly IProjectHelpers _projectHelpers;

        public ProjectsController(GTiHubContext _dbContext, IProjectHelpers projectHelpers)
        {
            this._dbContext = _dbContext;
            this._projectHelpers = projectHelpers;
        }

        // GET: api/Projects
        [HttpGet]
        public IEnumerable<ProjectViewModel> Get()
        {
            // Get projects from db as ProjectViewModels
            var projectViewModels = new List<ProjectViewModel>();
            foreach(var project in this._dbContext.Projects)
            {
                projectViewModels.Add(this._projectHelpers.GetProjectViewModel(project));
            }
            return projectViewModels;
        }

        // GET api/Projects/5
        [HttpGet("{id}", Name = "GetProject")]
        public IActionResult Get(int id)
        {
            var project = this._dbContext.Projects.Find(id);
            if (project == null) return this.NotFound();

            var projectViewModel = this._projectHelpers.GetProjectViewModel(project);

            return new ObjectResult(projectViewModel);
        }

        // POST api/Projects
        [HttpPost]
        public IActionResult Post([FromBody] ProjectViewModel project)
        {
            if (project == null) return this.BadRequest();
            
            var newProject = new Project(project.Name, project.Description, project.Project_Type, project.Client);

            this._dbContext.Projects.Add(newProject);

            // Add Maps, Sources, and Targets 
            foreach (var map in project.Maps)
            {
                this._dbContext.ProjectMaps.Add(new ProjectMap(newProject, map));
            }
            foreach(var source in project.Sources)
            {
                this._dbContext.ProjectSources.Add(new ProjectSource(newProject, source));
            }
            foreach(var target in project.Targets)
            {
                this._dbContext.ProjectTargets.Add(new ProjectTarget(newProject, target));
            }

            this._dbContext.SaveChanges();
            return this.CreatedAtRoute("GetProject", new { id = newProject.ProjectId }, project);
        }

        // PUT api/Projects/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ProjectViewModel project)
        {
            if ((project == null) || (project.ProjectId != id)) return this.BadRequest();

            var updatedProject = this._dbContext.Projects.Find(id);

            if (updatedProject == null) return this.NotFound();

            updatedProject.Name = project.Name;
            updatedProject.Description = project.Description;
            updatedProject.Project_Type = project.Project_Type;
            updatedProject.Client = project.Client;

            //Clear current project maps, sources, and targets
            this._dbContext.ProjectMaps.RemoveRange(this._dbContext.ProjectMaps.Where(x => x.ProjectId == updatedProject.ProjectId));
            this._dbContext.ProjectSources.RemoveRange(this._dbContext.ProjectSources.Where(x => x.ProjectId == updatedProject.ProjectId));
            this._dbContext.ProjectTargets.RemoveRange(this._dbContext.ProjectTargets.Where(x => x.ProjectId == updatedProject.ProjectId));

            // Add Maps, Sources, and Targets
            foreach (var map in project.Maps)
            {
                this._dbContext.ProjectMaps.Add(new ProjectMap(updatedProject, map));
            }
            foreach (var source in project.Sources)
            {
                this._dbContext.ProjectSources.Add(new ProjectSource(updatedProject, source));
            }
            foreach (var target in project.Targets)
            {
                this._dbContext.ProjectTargets.Add(new ProjectTarget(updatedProject, target));
            }

            this._dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Projects/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var project = this._dbContext.Projects.Find(id);
            if (project == null) return this.NotFound();

            this._dbContext.Projects.Remove(project);
            this._dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}