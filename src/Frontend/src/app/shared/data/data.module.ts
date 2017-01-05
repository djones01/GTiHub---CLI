import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { DataService } from './data.service';
import { FileUploadService } from './file-upload.service';

export { DataService } from './data.service';
export { FileUploadService } from './file-upload.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataService, FileUploadService]
})
export class DataModule { }


