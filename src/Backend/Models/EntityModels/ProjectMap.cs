namespace Backend.Models.EntityModels
{
    public class ProjectMap : Entity
    {
        public ProjectMap() { }

        public ProjectMap(Project project, Map map) 
        {
            Project = project;
            Map = map;
        }

        public  Map Map { get; set; }
        public int MapId { get; set; }
        public  Project Project { get; set; }
        public int ProjectId { get; set; }
    }
}