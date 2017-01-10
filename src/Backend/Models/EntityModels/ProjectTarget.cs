namespace Backend.Models.EntityModels
{
    public class ProjectTarget : Entity
    {
        public ProjectTarget() { }

        public Project Project { get; set; }
        public int ProjectId { get; set; }
        public Target Target { get; set; }
        public int TargetId { get; set; }
    }
}