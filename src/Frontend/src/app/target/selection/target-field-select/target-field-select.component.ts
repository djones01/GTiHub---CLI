import { Component, OnInit } from '@angular/core';
import { TargetService } from '../../target.service';
import { Target } from '../../target';
import { SelectItem } from 'primeng/primeng';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'target-field-select',
  templateUrl: './target-field-select.component.html',
  styleUrls: ['./target-field-select.component.css'],
  inputs: ['selectedTargetField']
})
export class TargetFieldSelectComponent implements OnInit, ControlValueAccessor {
  propagateChange: any = () => { };
  validateFn: any = () => { };
  private _selectedTargetField: any;
  private targets: Target[];
  private showDialog = false;

  showSelectDialog(){
    this.showDialog = !this.showDialog;
  }

  private columnOptions: SelectItem[];
  private cols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'effective_Date', header: 'Effective Date' },
      { field: 'active', header: 'Active' },
      { field: 'created_By', header: 'Created By' },
      { field: 'creation_Date', header: 'Creation Date' },
      { field: 'modified_By', header: 'Modified By' },
      { field: 'date_Modified', header: 'Date Modified' }
  ];

  registerOnChange(fn) {
      this.propagateChange = fn;
  }

  registerOnTouched() { }

  writeValue(value: any) {
      if (value) {
          this.selectedTargetField = value;
      }
  }

  validate(c: FormControl) {
      return this.validateFn(c);
  }

  get selectedTargetField() {
      return this._selectedTargetField;
  }

  set selectedTargetField(val) {
      this._selectedTargetField = val;
      this.propagateChange(val);
  }

  constructor(private targetService: TargetService) { }

  ngOnInit() {
    this.targetService.targets.subscribe(targets => this.targets = targets);

    this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
  }
}
