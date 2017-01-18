import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Map } from "../map";
import { MapService } from "../services/map.service";
import { ConfirmationService, SelectItem } from "primeng/primeng";

@Component({
  selector: 'map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css'],
  inputs: ['showFooterOptions', 'showHeader', 'emitSelected'],
  outputs: ['onSelectedMapsChange']
})
export class MapListComponent implements OnInit {
    // Control behavior of the list
    public showHeader: boolean = true;
    public showFooterOptions: boolean = true;
    public emitSelected: boolean = false;

    // Emit selected maps
    public onSelectedMapsChange = new EventEmitter();
    
    private showDialog = false;
    private canDelete = false;
    private canEdit = false;
    private maps: Map[];

    @Input() selectedMaps: Map[] = [];

    private columnOptions: SelectItem[];
    private cols = [
        { field: 'description', header: 'Description' },
        { field: 'effective_Date', header: 'Effective Date' },
        { field: 'active', header: 'Active' },
        { field: 'created_By', header: 'Created By' },
        { field: 'creation_Date', header: 'Creation Date' },
        { field: 'modified_By', header: 'Modified By' },
        { field: 'date_Modified', header: 'Date Modified' }
    ];

    editMap() {
        this.mapService.setEditMap(this.selectedMaps[0]);
        this.router.navigate(['../edit']);
    }

    deleteMaps() {
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected map(s)?",
            accept: () => {
                this.selectedMaps.forEach((c, i) => {
                    this.mapService.delete(c.mapId);
                });
                this.selectedMaps = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    }

    //Update the state of the delete and edit buttons based on row selection
    onRowSelect(event) {
        if (this.selectedMaps.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }

        if(this.emitSelected)
            this.onSelectedMapsChange.emit(this.selectedMaps);
    }
    onRowUnselect(event) {
        if (this.selectedMaps.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedMaps.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }

        if(this.emitSelected)
            this.onSelectedMapsChange.emit(this.selectedMaps);
    }

    constructor(private confirmationService: ConfirmationService, private router: Router, private mapService: MapService) { }
    ngOnInit() {
        this.mapService.maps.subscribe(maps => this.maps = maps);

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    }
}
