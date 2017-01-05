import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from './auth-guard.service';
import { UserAuthService } from './user-auth.service';

export { AuthGuardService } from './auth-guard.service';
export { UserAuthService } from './user-auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuardService, UserAuthService]
})
export class AuthModule { }
