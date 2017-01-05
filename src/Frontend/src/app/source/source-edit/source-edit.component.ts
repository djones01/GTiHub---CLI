import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SourceFieldEditComponent } from "../source-field-edit/source-field-edit.component";
import { SourceService } from "../source.service";
import { Source } from "../source";

@Component({
  selector: 'source-edit',
  templateUrl: './source-edit.component.html',
  styleUrls: ['./source-edit.component.css']
})
export class SourceEditComponent implements OnInit {
public srcForm: FormGroup;

    editing: boolean = false;

    @ViewChild(SourceFieldEditComponent)
    private SourceFieldEditComponent: SourceFieldEditComponent;

    onSubmit(source: Source) {
        if (this.editing) {
            this.sourceService.update(source);
        }
        else {
            this.sourceService.add(source);
        }
    }

    initSrcForm() {
        this.srcForm = this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            sourceFields: this._fb.array([])
        });
    }

    newSource() {
        this.SourceFieldEditComponent.seqNumCount = 1;
        this.initSrcForm();
    }

    constructor(private _fb: FormBuilder, private sourceService: SourceService) { }

    ngOnInit() {
        this.initSrcForm();
        this.sourceService.editSource.subscribe(edit => {
            if (edit) {
                this.editing = true;
                this.srcForm.patchValue(edit);
            }
        });

    }
}
