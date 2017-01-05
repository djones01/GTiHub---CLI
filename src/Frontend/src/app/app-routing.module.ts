import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'pages', redirectTo: 'pages/overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}