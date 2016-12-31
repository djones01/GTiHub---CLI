import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SourceRoutingModule } from './source-routing.module';

// feature modules
import { FileHandlingModule } from '../file-handling/file-handling.module';

// components
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceFieldEditComponent } from './source-field-edit/source-field-edit.component';
import { SourceDualSelectComponent } from './selection/source-dual-select/source-dual-select.component';
import { SourceListSelectComponent } from './selection/source-list-select/source-list-select.component';

// third party modules
import { 
  DataTableModule, 
  SharedModule, 
  ButtonModule, 
  DialogModule, 
  ConfirmDialogModule, 
  ConfirmationService, 
  MultiSelectModule, 
  PanelModule, 
  CalendarModule } from 'primeng/primeng';

// services
import { SourceService } from './source.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SourceRoutingModule,
    FileHandlingModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule,
    PanelModule,
    CalendarModule
  ],
  declarations: [
    SourceEditComponent, 
    SourceListComponent, 
    SourceFieldEditComponent, 
    SourceDualSelectComponent, 
    SourceListSelectComponent
    ],
  providers: [
    SourceService, 
    ConfirmationService
    ]
})
export class SourceModule { }
