namespace Backend.Controllers
{
    #region

    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Backend.Models.EntityModels;
    using Helpers;
    using Helpers.FileMapping;
    using Microsoft.Extensions.Logging;

    using Serilog;

    #endregion

    [Route("api/[controller]")]
    public class FileController : Controller
    {
        private readonly ITransformHelpers _transformHelpers;
        private readonly IFileHelpers _fileHelpers;

        public FileController(ITransformHelpers transformHelpers, IFileHelpers fileHelpers)
        {
            this._transformHelpers = transformHelpers;
            this._fileHelpers = fileHelpers;
        }

        [Route("ExtractFields")]
        [HttpPost]
        public async Task<IActionResult> ExtractFieldsSingle(IFormCollection form)
        {
            if (!this.Request.ContentType.Contains("multipart/form-data")) return new UnsupportedMediaTypeResult();

            try
            {
                _fileHelpers.CheckFilesValid(form.Files);
                var delimiter = Convert.ToChar(form["delimiter"]);
                var fieldRow = Convert.ToInt32(form["fieldRow"]);
                if (!Char.IsWhiteSpace(delimiter) && fieldRow > 0)
                {
                    var fields = await _fileHelpers.ExtractFieldsSingle(form.Files[0], delimiter, fieldRow);

                    return new ObjectResult(fields);
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Extracting sources in batch mode failed");
                if (ex is InvalidDataException)
                {
                    Log.Error("Format of file invalid");
                }
            }

            return new BadRequestResult();
        }

        [Route("ExtractSourcesBatch")]
        [HttpPost]
        public async Task<IActionResult> ExtractSourcesBatch(IFormCollection form)
        {
            if (!this.Request.ContentType.Contains("multipart/form-data")) return new UnsupportedMediaTypeResult();

            try
            {
                _fileHelpers.CheckFilesValid(form.Files);
                var delimiters = Convert.ToString(form["delimiter[]"]);
                var extractFieldsByFiles = Convert.ToString(form["extractFieldsByFile[]"]);
                if (!String.IsNullOrWhiteSpace(delimiters) && !String.IsNullOrWhiteSpace(extractFieldsByFiles))
                {
                    var delimitersList = delimiters.Split(',').Select(x => Convert.ToChar(x)).ToList();
                    var extractFieldsByFilesList = extractFieldsByFiles.Split(',').Select(x => bool.Parse(x)).ToList();

                    List<Source> sources = await _fileHelpers.ExtractSourcesBatch(form.Files, delimitersList, extractFieldsByFilesList);

                    return new ObjectResult(sources);
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Extracting sources in batch mode failed");
                if (ex is InvalidDataException)
                {
                    Log.Error("Format of file invalid");
                }
            }

            return new BadRequestResult();
        }

        [Route("ExtractTargetsBatch")]
        [HttpPost]
        public async Task<IActionResult> ExtractTargetsBatch(IFormCollection form)
        {
            if (!this.Request.ContentType.Contains("multipart/form-data")) return new UnsupportedMediaTypeResult();

            try
            {
                _fileHelpers.CheckFilesValid(form.Files);
                var delimiters = Convert.ToString(form["delimiter[]"]);
                var extractFieldsByFiles = Convert.ToString(form["extractFieldsByFile[]"]);
                if (!String.IsNullOrWhiteSpace(delimiters) && !String.IsNullOrWhiteSpace(extractFieldsByFiles))
                {
                    var delimitersList = delimiters.Split(',').Select(x => Convert.ToChar(x)).ToList();
                    var extractFieldsByFilesList = extractFieldsByFiles.Split(',').Select(x => bool.Parse(x)).ToList();

                    List<Target> targets = await _fileHelpers.ExtractTargetsBatch(form.Files, delimitersList, extractFieldsByFilesList);

                    return new ObjectResult(targets);
                }          
            }
            catch(Exception ex)
            {
                Log.Error(ex, "Extracting targets in batch mode failed");
                if(ex is InvalidDataException)
                {
                    Log.Error("Format of file invalid");
                }
            }

            return new BadRequestResult();
        }

        [Route("RunMapping")]
        [HttpPost]
        public async Task<FileResult> RunMapping(IFormCollection form)
        {
            var bytes = new byte[0];

            try
            {
                // Get form info
                var mapId = Convert.ToInt32(form["mapId"]);
                var evalConditions = Convert.ToBoolean(form["evalConditions"]);
                var outputDelimiter = form["outputDelimiter"];

                var success = false;

                this._transformHelpers.SetLogFile(form["mapId"]);

                // Get formatted data from the uploaded files
                var sourceTables = await Task.Run(() => this._transformHelpers.GetSourceTables(form));

                // Get list of transformations for map
                var transformations = await Task.Run(() => this._transformHelpers.GetMapTransformations(mapId));

                // Get the id of the primary source
                var primarySourceId = await Task.Run(() => this._transformHelpers.GetPrimarySourceId(ref form));

                // Get field counts for primary table
                var lineCount = sourceTables[primarySourceId].SourceVals.Length;
                var primaryFieldCount = sourceTables[primarySourceId].SourceFields.Count;

                // Get target tables
                var targetTables =
                    await
                        Task.Run(
                            () =>
                                this._transformHelpers.GetTargetTables(
                                    ref transformations,
                                    primarySourceId,
                                    lineCount,
                                    primaryFieldCount));

                var targetId = targetTables.Keys.ToList()[0];

                // Apply transformations 
                success =
                    await
                        Task.Run(
                            () =>
                                this._transformHelpers.TransformMapToFile(
                                    ref sourceTables,
                                    ref targetTables,
                                    ref transformations,
                                    primarySourceId,
                                    lineCount,
                                    primaryFieldCount,
                                    targetId,
                                    evalConditions));

                // Create new memory stream to return
                bytes = this._transformHelpers.GetTargetBytes(ref targetTables, targetId, outputDelimiter);

                // return result;    
            }
            catch (Exception ex)
            {
            }

            return this.File(bytes, "application/octet-stream", "test.csv");
        }
    }
}