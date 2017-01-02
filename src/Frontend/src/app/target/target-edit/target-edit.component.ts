import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TargetFieldEditComponent } from "../target-field-edit/target-field-edit.component";
import { TargetService } from "../target.service";
import { Target } from "../target";

@Component({
  selector: 'target-edit',
  templateUrl: './target-edit.component.html',
  styleUrls: ['./target-edit.component.css']
})
export class TargetEditComponent implements OnInit {
public srcForm: FormGroup;

    editing: boolean = false;

    @ViewChild(TargetFieldEditComponent)
    private TargetFieldEditComponent: TargetFieldEditComponent;

    onSubmit(target: Target) {
        if (this.editing) {
            this.targetService.update(target);
        }
        else {
            this.targetService.add(target);
        }
    }

    initSrcForm() {
        this.srcForm = this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            targetFields: this._fb.array([])
        });
    }

    newTarget() {
        this.TargetFieldEditComponent.seqNumCount = 1;
        this.initSrcForm();
    }

    back() {
        this.targetService.clearEditTarget();
        this.router.navigateByUrl('/target/list');
    }

    constructor(private _fb: FormBuilder, private router: Router, private targetService: TargetService) { }

    ngOnInit() {
        this.initSrcForm();
        this.targetService.editTarget.subscribe(edit => {
            if (edit) {
                this.editing = true;
                this.srcForm.patchValue(edit);
            }
        });

    }
}
