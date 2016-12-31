import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { FieldExtractorComponent } from './field-extractor/field-extractor.component';

// third party modules
import { PanelModule, FileUploadModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    FileUploadModule
  ],
  declarations: [FieldExtractorComponent],
  exports: [FieldExtractorComponent]
})
export class FileHandlingModule { }
