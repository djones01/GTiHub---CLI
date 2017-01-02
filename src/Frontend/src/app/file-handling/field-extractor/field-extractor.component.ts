import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-extractor',
  templateUrl: './field-extractor.component.html',
  styleUrls: ['./field-extractor.component.css'],
  outputs: ['onExtracted']
})
export class FieldExtractorComponent implements OnInit {
  private delimiter: string = "";
  public onExtracted = new EventEmitter();

  onFileUpload(event) {
      let xhr = event.xhr;
      let self = this;
      xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                let responseObj = JSON.parse(xhr.responseText);
                self.onExtracted.emit(responseObj);
                self.delimiter = "";
            }
        }
      };
  }

  onBeforeFileUpload(event){
      let formdata = event.formData;
      formdata.append("delimiter", this.delimiter);
  }

  constructor() { }

  ngOnInit() {
  }

}
