import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientEditComponent, ClientListComponent]
})
export class ClientModule { }
