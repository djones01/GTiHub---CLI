import { Component, Input } from "@angular/core";
import { ModuleWithComponentFactories } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'condition-edit',
  templateUrl: './condition-edit.component.html',
  styleUrls: ['./condition-edit.component.css']
})
export class ConditionEditComponent {
    @Input('group')
    conditionForm: FormGroup;

    //Options for operator selection
    private dateNumOpts = [
        { value: "==", display: "equals" },
        { value: "!=", display: "not equal" },
        { value: "<", display: "less than" },
        { value: "<=", display: "less than or equal" },
        { value: ">", display: "greater than" },
        { value: ">=", display: "greater than or equal" },
    ];

    private textOpts = [
        { value: "==", display: "equals" },
        { value: "!=", display: "not equal" }
        //TODO: Contains, doesn't contain, begins with, ends with
    ];

    private boolOpts = [
        { value: "==", display: "equals" },
        { value: "!=", display: "not equal" }
    ];

    constructor() { }
}
