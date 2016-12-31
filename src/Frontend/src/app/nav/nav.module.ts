import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// third party imports
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

// components
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    PanelMenuModule,
    RouterModule,
    SidebarModule
  ],
  declarations: [SideNavComponent],
  exports: [SideNavComponent]
})
export class NavModule { }
