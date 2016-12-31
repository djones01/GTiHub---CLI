import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourceEditComponent } from "./source-edit/source-edit.component";
import { SourceListComponent } from "./source-list/source-list.component";

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: SourceListComponent },
    { path: 'edit', component: SourceEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourceRoutingModule { }