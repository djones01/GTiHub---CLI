import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// third party modules
import { SidebarModule } from 'ng-sidebar';

// feature modules
import { NavModule } from './nav/nav.module';
import { HomeModule } from './home/home.module';

// components
import { AppComponent } from './app.component';

// services
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavModule,
    HomeModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
