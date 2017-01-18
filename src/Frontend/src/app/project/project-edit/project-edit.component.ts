import { Component, OnInit, OnDestroy } from "@angular/core";
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ProjectViewModel } from "../project";
import { ProjectService } from "../project.service";
import { ClientService } from "../../client/client.module";

@Component({
    selector: "project-edit",
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    projectForm: FormGroup;
    project: ProjectViewModel;

    public project_Types = [
        { value: 'upgrade', display: 'Upgrade' },
        { value: 'maintenance', display: 'Maintenance' },
        { value: 'new', display: 'New Installation' },
        { value: 'retrofit', display: 'Retrofit' }
    ];

    onSubmit(project: ProjectViewModel) {
        this.projectService.submit(this.project);
        this.reset();
    }

    initProjectForm() {
        this.projectForm = this._fb.group({
            description: ['', Validators.required],
            name: ['', Validators.required],
            project_Type: ['', Validators.required],
            client: ['', Validators.required],
            copyMaps: [false],
            copySources: [false],
            copyTargets: [false],
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
        this.projectService.editProject.subscribe((project: ProjectViewModel) => {
            this.project = project
            this.initProjectForm();
        });
    }
}
