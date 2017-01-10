namespace Backend.Models.EntityModels
{
    #region

    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class UserProjectSec : Entity
    {
        public UserProjectSec() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserProjSecId { get; set; }
        public DateTime Added_Date { get; set; }
        public int Access_Level { get; set; }
        public bool Active_On_Project { get; set; }

        public int ProjectId { get; set; }
        public Project Project { get; set; }

        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}