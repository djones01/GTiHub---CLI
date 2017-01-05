import { Component, OnInit, Input } from '@angular/core';
import { DateFormatComponent } from "../date-format/date-format.component";

@Component({
  selector: 'field-format',
  templateUrl: './field-format.component.html',
  styleUrls: ['./field-format.component.css']
})
export class FieldFormatComponent implements OnInit {
    @Input()
    fieldDataType: string;

    private showDialog = false;

    //Modal Functions
    showEditingDialog(content) {
        this.showDialog = !this.showDialog;
    }

    constructor() {}

    ngOnInit() {}


}
