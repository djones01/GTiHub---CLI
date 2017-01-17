import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientRoutingModule } from "./client-routing.module";

// components
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';

// third party imports
import { DataTableModule, SharedModule, ButtonModule, DialogModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

// services
import { ClientService } from "./client.service";

export { ClientService } from "./client.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,        
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule
  ],
  declarations: [ClientEditComponent, ClientListComponent],
  providers: [
        ClientService,
        ConfirmationService
    ]
})
export class ClientModule { }
