import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

// third party imports
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

// components
import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    PanelMenuModule
  ],
  declarations: [HomeComponent, OverviewComponent, AboutComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
