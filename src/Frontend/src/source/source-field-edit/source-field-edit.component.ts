import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { SourceService } from "../source.service";

@Component({
  selector: 'source-field-edit',
  templateUrl: './source-field-edit.component.html',
  styleUrls: ['./source-field-edit.component.css']
})
export class SourceFieldEditComponent implements OnInit {
    //Control the template / manual header boxes
    sopt = true;
    seqNumCount: number = 1;

    @Input('group')
    srcFldsForm: FormGroup;

    addSrcFld() {
        const control = <FormArray>this.srcFldsForm.controls['sourceFields'];
        control.push(this.initSrcFld());
    }

    resetSrcFlds() {
        const control = <FormArray>this.srcFldsForm.controls['sourceFields'];
        control.reset([]);
    }

    removeSrcFld(i: number) {
        let x = i;
        const control = <FormArray>this.srcFldsForm.controls['sourceFields'];
        // renumber the seqnums of other source fields
        for (x; x < control.length; x++) {
            let group = <FormGroup>control.at(x);
            let newVal = group.controls['seqNum'].value - 1;
            group.controls['seqNum'].setValue(newVal);
        }
        this.seqNumCount--;
        control.removeAt(i);
    }

    initSrcFld() {
        return this._fb.group({
            seqNum: [this.seqNumCount++],
            name: ['', Validators.required],
            datatype: ['', Validators.required],
            active: [true]
        });
    }

    private options = [
        { value: "url", display: "URL" },
        { value: "text", display: "Text" },
        { value: "date", display: "Date" },
        { value: "bool", display: "Boolean" },
        { value: "num", display: "Number" },
        { value: "currency", display: "Currency" },
        { value: "email", display: "Email" }
    ];

    setSourceFields(sourceFields: any[]) {
        const control = <FormArray>this.srcFldsForm.controls['sourceFields'];
        this.resetSrcFlds();
        for (let i = 0; i < sourceFields.length; i++) {
            this.addSrcFld();
            control.at(i).patchValue(sourceFields[i]);
        }
    }

    constructor(private _fb: FormBuilder, private sourceService: SourceService) {
    }

    ngOnInit() {
        this.sourceService.editSource.subscribe(editSource => {
            if (editSource && editSource.sourceFields) {
                this.setSourceFields(editSource.sourceFields);
            }
        });
    }
}
