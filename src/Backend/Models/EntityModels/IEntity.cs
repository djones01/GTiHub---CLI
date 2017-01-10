namespace Backend.Models.EntityModels
{
    #region

    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public interface ILoggingEntity
    {
        string Created_By { get; set; }

        DateTime? Creation_Date { get; set; }

        DateTime? Date_Modified { get; set; }

        string Modified_By { get; set; }
    }


    public abstract class Entity : ILoggingEntity
    {
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