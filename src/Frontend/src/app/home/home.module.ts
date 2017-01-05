import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

// components
import { HomeComponent } from './home.component';

// feature modules
import { NavModule } from '../nav/nav.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavModule
  ],
  declarations: [HomeComponent, OverviewComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
