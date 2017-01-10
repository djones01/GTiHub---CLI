namespace Backend.Models.EntityModels
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using System;
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class ApplicationUser : IdentityUser, ILoggingEntity
    {
        public ApplicationUser() { }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }

        public  ICollection<UserProjectSec> UserProjectSecs { get; set; }

        // Explicitly implement IEntity in order to be able to use IdentityUser
        [DataType(DataType.DateTime)]
        public DateTime? Creation_Date { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? Date_Modified { get; set; }

        public string Created_By { get; set; }

        public string Modified_By { get; set; }

        [Timestamp]
        public byte[] Version { get; set; }
    }
}