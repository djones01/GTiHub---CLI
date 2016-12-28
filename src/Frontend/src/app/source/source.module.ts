import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceFieldEditComponent } from './source-field-edit/source-field-edit.component';
import { SourceDualSelectComponent } from './selection/source-dual-select/source-dual-select.component';
import { SourceListSelectComponent } from './selection/source-list-select/source-list-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SourceEditComponent, SourceListComponent, SourceFieldEditComponent, SourceDualSelectComponent, SourceListSelectComponent]
})
export class SourceModule { }
