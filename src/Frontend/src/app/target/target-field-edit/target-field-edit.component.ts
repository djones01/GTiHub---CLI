import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { TargetService } from "../target.service";

@Component({
  selector: 'target-field-edit',
  templateUrl: './target-field-edit.component.html',
  styleUrls: ['./target-field-edit.component.css']
})
export class TargetFieldEditComponent implements OnInit {
    //Control the template / manual header boxes
    sopt = true;
    seqNumCount: number = 1;

    @Input('group')
    srcFldsForm: FormGroup;

    addSrcFld() {
        const control = <FormArray>this.srcFldsForm.controls['targetFields'];
        control.push(this.initSrcFld());
    }

    resetSrcFlds() {
        const control = <FormArray>this.srcFldsForm.controls['targetFields'];
        control.reset([]);
    }

    removeSrcFld(i: number) {
        let x = i;
        const control = <FormArray>this.srcFldsForm.controls['targetFields'];
        // renumber the seqnums of other target fields
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

    setTargetFields(targetFields: any[]) {
        const control = <FormArray>this.srcFldsForm.controls['targetFields'];
        this.resetSrcFlds();
        for (let i = 0; i < targetFields.length; i++) {
            this.addSrcFld();
            control.at(i).patchValue(targetFields[i]);
        }
    }

    constructor(private _fb: FormBuilder, private targetService: TargetService) {
    }

    ngOnInit() {
        this.targetService.editTarget.subscribe(editTarget => {
            if (editTarget && editTarget.targetFields) {
                this.setTargetFields(editTarget.targetFields);
            }
        });
    }
}
