import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { Target } from "../target";
import { TargetService } from "../target.service";
import { ConfirmationService, SelectItem } from "primeng/primeng";

@Component({
  selector: 'target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css'],
  inputs: ['showFooterOptions', 'showHeader', 'emitSelected'],
  outputs: ['onSelectedTargetsChange']
})
export class TargetListComponent implements OnInit {
    public emitSelected: boolean = false;
    public showHeader: boolean = true;
    public showFooterOptions: boolean = true;

    public onSelectedTargetsChange = new EventEmitter();
    private showDialog = false;
    private canDelete = false;
    private canEdit = false;
    private targets: Target[];
    private selectedTargets: Target[] = [];

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

    editTarget() {
        this.targetService.setEditTarget(this.selectedTargets[0]);
        this.router.navigateByUrl('/edit');
    }

    deleteTargets() {
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected target(s)?",
            accept: () => {
                this.selectedTargets.forEach((c, i) => {
                    this.targetService.delete(c.targetId);
                });
                this.selectedTargets = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    }

    //Update the state of the delete and edit buttons based on row selection
    onRowSelect(event) {
        if (this.selectedTargets.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }

        if(this.emitSelected)
            this.onSelectedTargetsChange.emit(this.selectedTargets);
    }
    onRowUnselect(event) {
        if (this.selectedTargets.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedTargets.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }

        if(this.emitSelected)
            this.onSelectedTargetsChange.emit(this.selectedTargets);
    }

    constructor(private confirmationService: ConfirmationService, private router: Router, private targetService: TargetService) { }
    ngOnInit() {
        this.targetService.targets.subscribe(targets => this.targets = targets);

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    }
}
