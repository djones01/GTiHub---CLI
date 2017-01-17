namespace Backend.Models.EntityModels
{
    public class ProjectSource : Entity
    {
        public ProjectSource() { }

        public ProjectSource(Project project, Source source) 
        {
            Project = project;
            Source = source;
        }

        public  Project Project { get; set; }
        public int ProjectId { get; set; }
        public  Source Source { get; set; }
        public int SourceId { get; set; }
    }
}