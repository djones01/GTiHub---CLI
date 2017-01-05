import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'rule-source-field-edit',
  templateUrl: './rule-source-field-edit.component.html',
  styleUrls: ['./rule-source-field-edit.component.css']
})
export class RuleSourceFieldEditComponent implements OnInit {
  @Input('group')
  ruleSrcFldForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
