using Backend.Models.EntityModels;
using Backend.Models.HelperModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Helpers.FileMapping
{
    public interface IFileHelpers
    {
        void CheckFilesValid(IFormFileCollection files);
        FieldLine ExtractFieldsLine(string line, char delimiter);
        Task<DataFile> GetDataFile(IFormFile file);
        Task<List<GenericField>> ExtractFieldsSingle(IFormFile file, char delimiter, int fieldRow);
        Task<List<Source>> ExtractSourcesBatch(IFormFileCollection files, List<char> delimiters, List<bool> extractFieldsByFiles);
        Task<List<Target>> ExtractTargetsBatch(IFormFileCollection files, List<char> delimiters, List<bool> extractFieldsByFiles);
    }
    public class FileHelpers : IFileHelpers
    {
        private readonly ITransformHelpers _transformHelpers;
        public FileHelpers(ITransformHelpers transformHelpers)
        {
            this._transformHelpers = transformHelpers;
        }

        public void CheckFilesValid(IFormFileCollection files)
        {
            foreach (var file in files)
            {
                if (file == null) throw new Exception("File is null");
                if (file.Length == 0) throw new Exception("File is empty");
                if ((file.ContentType != "text/csv") && (file.ContentType != "text/plain")
                    && (file.ContentType != "application/octet-stream") && (file.ContentType != "application/vnd.ms-excel")) throw new InvalidDataException("File is invalid format");
            }
        }

        public FieldLine ExtractFieldsLine(string line, char delimiter)
        {
            var sfieldSeqCount = 1;

            var gfields = new List<GenericField>();

            // Check if line is empty or null
            if (!String.IsNullOrWhiteSpace(line))
            {
                // Check if the specified delimiter actually occurs in the line
                if (line.Count(c => c == delimiter) > 0)
                {
                    var fields = line.Split(delimiter);
                    foreach (var field in fields) gfields.Add(new GenericField(field, true, "text", sfieldSeqCount++));
                }
                else
                {
                    throw new Exception("Delimiter not found in line");
                }               
            }
            else
            {
                throw new Exception("Specified line was null, empty, or whitespace");            
            }

            return new FieldLine(gfields);
        }

        public async Task<DataFile> GetDataFile(IFormFile file)
        {
            var lines = await this._transformHelpers.ReadAllLinesAsync(file);
            return new DataFile(file.Name, lines);
        }

        public FieldLine CombineLines(List<FieldLine> lines)
        {
            var combined = new FieldLine();
            foreach(var line in lines)
            {
                combined.AddLine(line);
            }
            return combined;
        }

        public async Task<List<GenericField>> ExtractFieldsSingle(IFormFile file, char delimiter, int fieldRow)
        {
            var dataFile = await GetDataFile(file);
            if(dataFile.Lines.Length == 0)
            {
                throw new Exception("Extraction of fields failed");
            }
            else
            {
                return ExtractFieldsLine(dataFile.Lines[fieldRow - 1], delimiter).Fields;
            }

            // if we get here, something else failed
            throw new Exception("Extraction of fields failed");         
        }

        public async Task<List<Source>> ExtractSourcesBatch(IFormFileCollection files, List<char> delimiters, List<bool> extractFieldsByFiles)
        {
            var dataFileList = new List<DataFile>();
            Source newSource;
            var sourcesInFiles = new List<Source>();

            int newCounter = 1;
            // Loop through all the files and get their lines
            for(int i = 0; i < files.Count; i++)
            {
                var dataFile = await GetDataFile(files[i]);
                dataFile.Delimiter = delimiters[i];
                dataFile.ExtractFieldsByFile = extractFieldsByFiles[i];
                dataFileList.Add(dataFile);
            }
            //Loop through each file
            foreach(var dataFile in dataFileList)
            {
                // Loop through each line of each file and add to the list of fields
                foreach(var line in dataFile.Lines)
                {
                    dataFile.FieldLines.Add(this.ExtractFieldsLine(line, dataFile.Delimiter));
                }

                // Create one source if extracting fields as a compilation from the file
                // Create multiple sources if extracting fields by line
                if (dataFile.ExtractFieldsByFile)
                {
                    newSource = new Source
                    {
                        Name = "NEW SOURCE" + newCounter,
                        Description = "Fill in Description",
                        Effective_Date = DateTime.Now,
                        Active = true,
                        SourceFields = FieldLine.ConvertGenericLinetoSF(CombineLines(dataFile.FieldLines))
                    };

                    sourcesInFiles.Add(newSource);
                }
                else
                {
                    foreach(var fieldLine in dataFile.FieldLines)
                    {
                        newSource = new Source
                        {
                            Name = "NEW SOURCE" + newCounter,
                            Description = "Fill in Description",
                            Effective_Date = DateTime.Now,
                            Active = true,
                            SourceFields = FieldLine.ConvertGenericLinetoSF(fieldLine)
                        };

                        sourcesInFiles.Add(newSource);
                    }
                }
            }

            return sourcesInFiles;
        }

        public async Task<List<Target>> ExtractTargetsBatch(IFormFileCollection files, List<char> delimiters, List<bool> extractFieldsByFiles)
        {
            var dataFileList = new List<DataFile>();
            Target newTarget;
            var targetsInFiles = new List<Target>();

            int newCounter = 1;
            // Loop through all the files and get their lines
            for (int i = 0; i < files.Count; i++)
            {
                var dataFile = await GetDataFile(files[i]);
                dataFile.Delimiter = delimiters[i];
                dataFile.ExtractFieldsByFile = extractFieldsByFiles[i];
                dataFileList.Add(dataFile);
            }
            //Loop through each file
            foreach (var dataFile in dataFileList)
            {
                // Loop through each line of each file and add to the list of fields
                foreach (var line in dataFile.Lines)
                {
                    dataFile.FieldLines.Add(this.ExtractFieldsLine(line, dataFile.Delimiter));
                }

                // Create one target if extracting fields as a compilation from the file
                // Create multiple targets if extracting fields by line
                if (dataFile.ExtractFieldsByFile)
                {
                    newTarget = new Target
                    {
                        Name = "NEW SOURCE" + newCounter,
                        Description = "Fill in Description",
                        Effective_Date = DateTime.Now,
                        Active = true,
                        TargetFields = FieldLine.ConvertGenericLinetoTF(CombineLines(dataFile.FieldLines))
                    };

                    targetsInFiles.Add(newTarget);
                }
                else
                {
                    foreach (var fieldLine in dataFile.FieldLines)
                    {
                        newTarget = new Target
                        {
                            Name = "NEW SOURCE" + newCounter,
                            Description = "Fill in Description",
                            Effective_Date = DateTime.Now,
                            Active = true,
                            TargetFields = FieldLine.ConvertGenericLinetoTF(fieldLine)
                        };

                        targetsInFiles.Add(newTarget);
                    }
                }
            }

            return targetsInFiles;
        }
    }

    public class DataFile
    {
        public DataFile(string fileName, string[] lines)
        {
            FileName = fileName;
            Lines = lines;
        }
        public string FileName { get; set; }
        public char Delimiter { get; set; }
        public bool ExtractFieldsByFile { get; set; }
        public string[] Lines { get; set; }
        public List<FieldLine> FieldLines { get; set; }
    }

    public class FieldLine
    {
        public FieldLine() { }

        public FieldLine(List<GenericField> fields)
        {
            Fields = fields;
        }

        public List<GenericField> Fields { get; set; }

        public static List<SourceField> ConvertGenericLinetoSF(FieldLine line)
        {
            List<SourceField> sourceFields = new List<SourceField>();
            foreach (var field in line.Fields)
            {
                sourceFields.Add(GenericField.GenericToSourceField(field));
            }
            return sourceFields;
        }

        public static List<TargetField> ConvertGenericLinetoTF(FieldLine line)
        {
            List<TargetField> targetFields = new List<TargetField>();
            foreach (var field in line.Fields)
            {
                targetFields.Add(GenericField.GenericToTargetField(field));
            }
            return targetFields;
        }

        public void AddLine(FieldLine line)
        {
            this.Fields.Concat(line.Fields);   
        }
    }
}
