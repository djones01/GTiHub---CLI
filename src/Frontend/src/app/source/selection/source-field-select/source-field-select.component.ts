import { Component, OnInit } from '@angular/core';
import { SourceService } from '../../source.service';
import { Source, SourceField } from '../../source';
import { SelectItem } from 'primeng/primeng';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'source-field-select',
  templateUrl: './source-field-select.component.html',
  styleUrls: ['./source-field-select.component.css'],
  inputs: ['selectedSourceField']
})
export class SourceFieldSelectComponent implements OnInit, ControlValueAccessor {
  propagateChange: any = () => { };
  validateFn: any = () => { };
  private _selectedSourceField: SourceField;
  private sources: Source[];
  private showDialog = false;
  private expandedSource: Source;
  private loading = true;

  //
  private sourceColumnOptions: SelectItem[];
  private sourceCols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'effective_Date', header: 'Effective Date' },
      { field: 'active', header: 'Active' },
      { field: 'created_By', header: 'Created By' },
      { field: 'creation_Date', header: 'Creation Date' },
      { field: 'modified_By', header: 'Modified By' },
      { field: 'date_Modified', header: 'Date Modified' }
  ];


  private sourceFieldColumnOptions: SelectItem[];
  private sourceFieldCols = [
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
      this.expandedSource = event.data;
      // get source fields for the selected source
      if(this.expandedSource.sourceFields == null || this.expandedSource.sourceFields == []){
          this.sourceService.getSourceFields(this.expandedSource.sourceId)
        .subscribe(sourcefields => 
            this.expandedSource.sourceFields = sourcefields, 
            () => {
                clearTimeout(timeout);
                this.loading = false;
            });
      }
  }

  cancel(){
      this.selectedSourceField = null;
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
          this.selectedSourceField = value;
      }
  }

  validate(c: FormControl) {
      return this.validateFn(c);
  }

  get selectedSourceField() {
      return this._selectedSourceField;
  }

  set selectedSourceField(val) {
      this._selectedSourceField = val;
      this.propagateChange(val);
  }

  constructor(private sourceService: SourceService) { }

  ngOnInit() {
    this.sourceService.sources.subscribe(sources => this.sources = sources);

    // Initialize source and sourcefield column options
    this.sourceColumnOptions = [], this.sourceFieldColumnOptions = [];
    for (let i = 0; i < this.sourceCols.length; i++) {
        this.sourceColumnOptions.push({ label: this.sourceCols[i].header, value: this.sourceCols[i] });
    }
    for (let i = 0; i < this.sourceCols.length; i++) {
        this.sourceFieldColumnOptions.push({ label: this.sourceFieldCols[i].header, value: this.sourceFieldCols[i] });
    }
  }
}
