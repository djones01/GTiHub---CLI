import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { DataService, FileUploadService } from "../../shared/data/data.module";
import { FilePackage } from "../../map/map-run/filepackage";
import { Map } from "../../map/map";

@Injectable()
export class MapRunService {
    // Array of FilePackages which will be appended to formdata
    private _filePackages = new BehaviorSubject<FilePackage[]>([]);
    filePackages: Observable<FilePackage[]> = this._filePackages.asObservable();
    
    private _selectedMapId = new BehaviorSubject<number>(null);
    selectedMapId: Observable<number> = this._selectedMapId.asObservable(); 

    // On changing selected mapping
    initFilePackages(mapId: number) {
        var filepackages = new Array<FilePackage>();
        this.dataService.Get("Maps/MapSources", mapId)
            .subscribe(sources => {
                sources.forEach(function(source) {
                    filepackages.push({
                        isPrimarySource: false,
                        sourceId: source["sourceId"],
                        sourceName: source["name"],
                        sourceDescription: source["description"],
                        firstRowHeader: true,
                        altHeadRow: 1,
                        delimiter: "",
                        file: null
                    });
                });
                if (filepackages.length == 1) {
                    filepackages[0].isPrimarySource = true;
                }
                this._filePackages.next(filepackages);
                this._selectedMapId.next(mapId);
            });
    }

    uploadAll(formValues: any) {
        let formData = new FormData();
        let options = formValues["options"];
        let filePackages = formValues['filePackages'] as FilePackage[];
        filePackages.forEach((fp, i) => {
            formData.append("primary-" + fp.sourceId, fp.isPrimarySource);
            formData.append("firstRowIsHeader-" + fp.sourceId, fp.firstRowHeader);
            formData.append("altHeadRow-" + fp.sourceId, fp.altHeadRow);
            formData.append("delimiter-" + fp.sourceId, fp.delimiter);
            formData.append(fp.sourceId, fp.file, fp.file.name);
        });
        formData.append("mapId", this._selectedMapId.getValue());
        formData.append("evalConditions", options["evalConditions"]);
        formData.append("outputDelimiter", (options["outputDelimiter"] == "" ? "," : options["outputDelimiter"]));

        return this.fileUploadService.makeFileRequestFd("File/RunMapping", formData)
            .map(res => new Blob([res], { type: this.getMimeType(options["fileExt"]) }));
    }

    getMimeType(fileExt: string) {
        switch (fileExt) {
            case "csv":
                return "text/csv";
            case "txt":
                return "text/plain";
            case "dat":
                return "application/octet-stream";
            default:
                return "text/plain";
        }
    }

    constructor(private dataService: DataService, private fileUploadService: FileUploadService) {}
}
