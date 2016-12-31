import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from './user-routing.module';

// components
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

// third party modules
import { TextMaskModule } from 'angular2-text-mask';
import { DataTableModule, SharedModule, ButtonModule, DialogModule, ConfirmDialogModule, ConfirmationService, MultiSelectModule } from 'primeng/primeng';

// services
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    TextMaskModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule
  ],
  declarations: [UserEditComponent, UserListComponent],
  providers: [UserService, ConfirmationService] 
})
export class UserModule { }
