import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Source } from "../source";
import { SourceService } from "../source.service";
import { ConfirmationService, SelectItem } from "primeng/primeng";

@Component({
  selector: 'source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent implements OnInit {
private showDialog = false;
    private canDelete = false;
    private canEdit = false;
    private sources: Source[];
    private selectedSources: Source[] = [];

    private columnOptions: SelectItem[];
    private cols = [
        { field: 'name', header: 'Name' },
        { field: 'description', header: 'Description' },
        { field: 'effective_Date', header: 'Effective Date' },
        { field: 'active', header: 'Active' },
        { field: 'created_By', header: 'Created By' },
        { field: 'creation_Date', header: 'Creation Date' },
        { field: 'modified_By', header: 'Modified By' },
        { field: 'date_Modified', header: 'Date Modified' }
    ];

    editSource() {
        this.sourceService.setEditSource(this.selectedSources[0]);
        this.router.navigateByUrl('/edit');
    }

    deleteSources() {
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected source(s)?",
            accept: () => {
                this.selectedSources.forEach((c, i) => {
                    this.sourceService.delete(c.sourceId);
                });
                this.selectedSources = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    }

    //Update the state of the delete and edit buttons based on row selection
    onRowSelect(event) {
        if (this.selectedSources.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }
    }
    onRowUnselect(event) {
        if (this.selectedSources.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedSources.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }
    }

    constructor(private confirmationService: ConfirmationService, private router: Router, private sourceService: SourceService) { }
    ngOnInit() {
        this.sourceService.sources.subscribe(sources => this.sources = sources);

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    }
}
