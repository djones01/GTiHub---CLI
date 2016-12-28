import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    PanelMenuModule,
    RouterModule
  ],
  declarations: [SideNavComponent],
  exports: [SideNavComponent]
})
export class NavModule { }
