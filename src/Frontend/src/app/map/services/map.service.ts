import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Map, IMap } from "../map";
import { DataService } from "../../shared/data/data.module";
import { Router } from "@angular/router";

@Injectable()
export class MapService {
    private _maps: BehaviorSubject<Map[]> = new BehaviorSubject([]);
    maps: Observable<Map[]> = this._maps.asObservable();
    private _editMap: BehaviorSubject<Map> = new BehaviorSubject(this.newMap());
    editMap: Observable<Map> = this._editMap.asObservable();

    editing: boolean = false;

    private dataStore: {
        maps: Map[]
    };

    loadall() {
        this.dataService.GetAll("Maps")
            .subscribe(maps => {
                this.dataStore.maps = maps;
                this._maps.next(this.dataStore.maps);
            }, error => console.log(error), () => { });
    }

    setEditMap(editMap: Map){ 
        // Load Transforms for the map being edited
        this.dataService.Get('Maps/GetMapTransforms', editMap.mapId)
            .subscribe(transformations => {
                editMap.transformations = transformations;
                this.router.navigate(['/map-edit']);
            },
            error => console.log(error));
        this._editMap.next(editMap);
        this.editing = true;
    }

    initEditMap() {
        this._editMap.next(this.newMap());
    }

    newMap() {
        return new Map('', new Date(), true, [])
    }

    add(map: Map) {
        this.dataService.Add('Maps', map).subscribe(map => {
            this.dataStore.maps.push(map);
            this._maps.next(this.dataStore.maps);
        }, error => console.log(error));
    }

    update(map: Map) {
        let editId = this._editMap.getValue().mapId;
        map.mapId = editId;
        this.dataService.Update('Maps', editId, map).subscribe(() => {
            this.dataStore.maps.forEach((m, i) => {
                if (m.mapId === map.mapId) { this.dataStore.maps[i] = map; }
            });
            this._maps.next(this.dataStore.maps);
        }, error => console.log(error));
        this.editing = false;
        this.initEditMap();
    }

    delete(mapId: number) {
        this.dataService.Delete('Maps', mapId).subscribe(response => {
            this.dataStore.maps.forEach((m, i) => {
                if (m.mapId === mapId) { this.dataStore.maps.splice(i, 1); }
            });
            this._maps.next(this.dataStore.maps);
        }, error => console.log(error));
    }



    constructor(private dataService: DataService, private router: Router) {
        this.dataStore = { maps: [] };
        this.initEditMap();
        this.loadall();
    }
}
