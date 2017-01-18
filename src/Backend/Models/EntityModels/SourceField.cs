namespace Backend.Models.EntityModels
{
    using HelperModels;
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class SourceField : Entity, IGenericField
    {
        public SourceField() { }
       
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SourceFieldId { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string Datatype { get; set; }
        public int SeqNum { get; set; }

        public  ICollection<Condition> Conditions { get; set; }    
        public  ICollection<RuleSourceField> RuleSourceFields { get; set; }

        public  Source Source { get; set; }
        public int SourceId { get; set; }
    }
}