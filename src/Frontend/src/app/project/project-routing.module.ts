import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { ProjectListComponent } from "./project-list/project-list.component";

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: ProjectListComponent },
    { path: 'edit', component: ProjectEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }