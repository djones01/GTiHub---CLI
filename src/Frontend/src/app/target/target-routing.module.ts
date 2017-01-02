import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TargetEditComponent } from "./target-edit/target-edit.component";
import { TargetListComponent } from "./target-list/target-list.component";

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: TargetListComponent },
    { path: 'edit', component: TargetEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TargetRoutingModule { }