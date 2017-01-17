import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TargetRoutingModule } from './target-routing.module';

// feature modules
import { FileHandlingModule } from '../file-handling/file-handling.module';

// components
import { TargetEditComponent } from './target-edit/target-edit.component';
import { TargetListComponent } from './target-list/target-list.component';
import { TargetFieldEditComponent } from './target-field-edit/target-field-edit.component';
import { TargetFieldSelectComponent } from './selection/target-field-select/target-field-select.component';

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
  CalendarModule,
  PickListModule } from 'primeng/primeng';

// services
import { TargetService } from './target.service';

export { TargetService } from './target.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TargetRoutingModule,
    FileHandlingModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule,
    PanelModule,
    CalendarModule,
    PickListModule
  ],
  declarations: [
    TargetEditComponent, 
    TargetListComponent, 
    TargetFieldEditComponent, 
    TargetFieldSelectComponent
    ],
  providers: [
    TargetService, 
    ConfirmationService
    ],
  exports: [TargetListComponent,
  TargetFieldSelectComponent]
})
export class TargetModule { }
