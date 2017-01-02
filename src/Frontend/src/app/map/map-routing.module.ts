import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapEditComponent } from "./map-edit/map-edit.component";
import { MapListComponent } from "./map-list/map-list.component";

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: MapListComponent },
    { path: 'edit', component: MapEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule { }