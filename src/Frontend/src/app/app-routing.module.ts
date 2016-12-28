import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}