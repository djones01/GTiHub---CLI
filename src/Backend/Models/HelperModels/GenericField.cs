using Backend.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.HelperModels
{
    public interface IGenericField
    {
        string Name { get; set; }
        bool Active { get; set; }
        string Datatype { get; set; }
        int SeqNum { get; set; }
    }
    // Used in place of source or target field when extracting fields
    public class GenericField : IGenericField
    {
        public GenericField(string name, bool active, string datatype, int seqNum)
        {
            Name = name;
            Active = active;
            Datatype = datatype;
            SeqNum = seqNum;
        }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string Datatype { get; set; }
        public int SeqNum { get; set; }

        public static SourceField GenericToSourceField(GenericField generic)
        {
            return new SourceField
            {
                Name = generic.Name,
                Datatype = generic.Datatype,
                Active = generic.Active,
                SeqNum = generic.SeqNum
            };
        }

        public static TargetField GenericToTargetField(GenericField generic)
        {
            return new TargetField
            {
                Name = generic.Name,
                Datatype = generic.Datatype,
                Active = generic.Active,
                SeqNum = generic.SeqNum
            };
        }
    }
}
