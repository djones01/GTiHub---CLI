namespace Backend.Models.EntityModels
{
    using HelperModels;
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class TargetField : Entity, IGenericField
    {
        public TargetField() { }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TargetFieldId { get; set; }
        public bool Active { get; set; }
        public string Datatype { get; set; }
        public string Name { get; set; }
        public int SeqNum { get; set; }

        public  ICollection<Rule> Rules { get; set; }
       
        public  Target Target { get; set; }
        public int TargetId { get; set; }
    }
}