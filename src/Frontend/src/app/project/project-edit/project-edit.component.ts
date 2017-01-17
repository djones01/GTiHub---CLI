import { Component, OnInit, OnDestroy } from "@angular/core";
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { ClientService } from "../../client/client.module";

@Component({
    selector: "project-edit",
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    projectForm: FormGroup;
    project: Project;

    public project_Types = [
        { value: 'upgrade', display: 'Upgrade' },
        { value: 'maintenance', display: 'Maintenance' },
        { value: 'new', display: 'New Installation' },
        { value: 'retrofit', display: 'Retrofit' }
    ];

    onSubmit(project: Project) {
        Object.assign(this.project, project);
        this.projectService.submit(this.project);
        this.reset();
    }

    initProjectForm() {
        this.projectForm = this._fb.group({
            description: ['', Validators.required],
            name: ['', Validators.required],
            project_Type: ['', Validators.required],
            client: ['', Validators.required],
            maps: [[]],
            sources: [[]],
            targets: [[]],
            userProjectSecs: [[]]
        });
    }

    reset() {
        this.initProjectForm();
    }

    constructor(private _fb: FormBuilder, private projectService: ProjectService, private clientService: ClientService) {
    }

    ngOnInit(): void {
        this.projectService.editProject.subscribe(project => {
            this.project = project
            this.initProjectForm();
        });
    }
}
