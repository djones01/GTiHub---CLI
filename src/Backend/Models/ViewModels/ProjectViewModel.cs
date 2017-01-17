using Backend.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.ViewModels
{
    public class ProjectViewModel
    {
        public ProjectViewModel() { }

        public int? ProjectId { get; set; }

        public string Description { get; set; }
        public string Name { get; set; }
        public string Project_Type { get; set; }

        public Client Client { get; set; }
        public ICollection<Map> Maps { get; set; }
        public ICollection<Source> Sources { get; set; }
        public ICollection<Target> Targets { get; set; }
        public ICollection<UserProjectSec> UserProjectSecs { get; set; }
    }
}
