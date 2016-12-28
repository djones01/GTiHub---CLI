import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectDashboardComponent, ProjectEditComponent, ProjectListComponent, ProjectOverviewComponent]
})
export class ProjectModule { }
