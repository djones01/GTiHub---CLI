import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProjectRoutingModule } from './project-routing.module';

// feature modules
import { SourceModule } from '../source/source.module';
import { TargetModule } from '../target/target.module';

// components
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

// third party modules
import { 
  DataTableModule, 
  SharedModule, 
  ButtonModule, 
  DialogModule, 
  ConfirmDialogModule, 
  ConfirmationService, 
  MultiSelectModule, 
  PanelModule
} from 'primeng/primeng';

// services
import { ProjectService } from './project.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    SourceModule,
    TargetModule,
    DataTableModule, 
    SharedModule, 
    ButtonModule, 
    DialogModule, 
    ConfirmDialogModule, 
    MultiSelectModule, 
    PanelModule
  ],
  declarations: [
    ProjectDashboardComponent, 
    ProjectEditComponent, 
    ProjectListComponent, 
    ProjectOverviewComponent
    ]
  ,
  providers: [
    ProjectService, 
    ConfirmationService
    ],
  exports: [
    ProjectDashboardComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectOverviewComponent
  ]
})
export class ProjectModule { }
