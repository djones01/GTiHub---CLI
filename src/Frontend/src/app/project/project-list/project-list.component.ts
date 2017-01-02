import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { ConfirmationService, SelectItem } from "primeng/primeng";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
private showDialog = false;
    private canDelete = false;
    private canEdit = false;
    private projects: Project[];
    private selectedProjects: Project[] = [];

    private columnOptions: SelectItem[];
    private cols = [
        { field: 'name', header: 'Name' },
        { field: 'description', header: 'Description' },
        { field: 'project_Type', header: 'Project Type' },
        { field: 'client', header: 'Client' },
        { field: 'created_By', header: 'Created By' },
        { field: 'creation_Date', header: 'Creation Date' },
        { field: 'modified_By', header: 'Modified By' },
        { field: 'date_Modified', header: 'Date Modified' }
    ];

    editProject() {
        this.projectService.setEditProject(this.selectedProjects[0]);
        this.router.navigateByUrl('/edit');
    }

    deleteProjects() {
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected project(s)?",
            accept: () => {
                this.selectedProjects.forEach((c, i) => {
                    this.projectService.delete(c.projectId);
                });
                this.selectedProjects = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    }

    //Update the state of the delete and edit buttons based on row selection
    onRowSelect(event) {
        if (this.selectedProjects.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }
    }
    onRowUnselect(event) {
        if (this.selectedProjects.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedProjects.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }
    }

    constructor(private confirmationService: ConfirmationService, private router: Router, private projectService: ProjectService) { }
    ngOnInit() {
        this.projectService.projects.subscribe(projects => this.projects = projects);

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    }
}
