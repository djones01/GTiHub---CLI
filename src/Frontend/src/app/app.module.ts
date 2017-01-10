import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// feature modules
import { HomeModule } from './home/home.module';
import { AuthModule } from './shared/auth/auth.module';
import { AlertModule } from './shared/alert/alert.module';
import { UiModule } from './shared/ui/ui.module';
import { DataModule } from './shared/data/data.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// app settings
import { AppSettings } from './app-settings';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    AuthModule,
    AlertModule,
    UiModule,
    DataModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [AppSettings]
})
export class AppModule { }
