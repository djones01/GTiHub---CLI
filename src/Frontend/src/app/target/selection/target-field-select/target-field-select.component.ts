import { Component, OnInit } from '@angular/core';
import { TargetService } from '../../target.service';
import { Target, TargetField } from '../../target';
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
  private _selectedTargetField: TargetField;
  private targets: Target[];
  private showDialog = false;
  private expandedTarget: Target;
  private loading = true;

  //
  private targetColumnOptions: SelectItem[];
  private targetCols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'effective_Date', header: 'Effective Date' },
      { field: 'active', header: 'Active' },
      { field: 'created_By', header: 'Created By' },
      { field: 'creation_Date', header: 'Creation Date' },
      { field: 'modified_By', header: 'Modified By' },
      { field: 'date_Modified', header: 'Date Modified' }
  ];


  private targetFieldColumnOptions: SelectItem[];
  private targetFieldCols = [
      { field: 'seqNum', header: 'Sequence Number' },
      { field: 'name', header: 'Name' },
      { field: 'datatype', header: 'Description' },
      { field: 'active', header: 'Active' },
      { field: 'created_By', header: 'Created By' },
      { field: 'creation_Date', header: 'Creation Date' },
      { field: 'modified_By', header: 'Modified By' },
      { field: 'date_Modified', header: 'Date Modified' }
  ];

  rowExpanded(event){
      // only display the loading dots after 1s to avoid strange UI if API call takes less time.
      let timeout = setTimeout(function(){ this.loading = true }, 1000);
      this.expandedTarget = event.data;
      // get target fields for the selected target
      if(this.expandedTarget.targetFields == null || this.expandedTarget.targetFields == []){
          this.targetService.getTargetFields(this.expandedTarget.targetId)
        .subscribe(targetfields => 
            this.expandedTarget.targetFields = targetfields, 
            () => {
                clearTimeout(timeout);
                this.loading = false;
            });
      }
  }

  cancel(){
      this.selectedTargetField = null;
      this.toggleDialog();
  }

  toggleDialog(){
    this.showDialog = !this.showDialog;
  }
  
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

    // Initialize target and targetfield column options
    this.targetColumnOptions = [], this.targetFieldColumnOptions = [];
    for (let i = 0; i < this.targetCols.length; i++) {
        this.targetColumnOptions.push({ label: this.targetCols[i].header, value: this.targetCols[i] });
    }
    for (let i = 0; i < this.targetCols.length; i++) {
        this.targetFieldColumnOptions.push({ label: this.targetFieldCols[i].header, value: this.targetFieldCols[i] });
    }
  }
}
