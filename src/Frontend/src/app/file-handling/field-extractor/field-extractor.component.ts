import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-extractor',
  templateUrl: './field-extractor.component.html',
  styleUrls: ['./field-extractor.component.css']
})
export class FieldExtractorComponent implements OnInit {
  private delimiter: string = "";
  @Output() extracted: EventEmitter<any> = new EventEmitter();

  extractFile() {
        /*this.uploadService.makeFileRequest("File/ExtractHeaders", ["delimiter"], [this.delimiter], [this.uploader.queue[0]._file])
            .subscribe((sourceFields: Object[]) => {
                if (sourceFields) {
                    const control = <FormArray>this.srcFldsForm.controls['sourceFields'];
                    this.resetSrcFlds();
                    for (let i = 0; i < sourceFields.length; i++) {
                        this.addSrcFld();
                        control.at(i).patchValue(sourceFields[i]);
                    }
                }
            });*/
    }

  constructor() { }

  ngOnInit() {
  }

}
