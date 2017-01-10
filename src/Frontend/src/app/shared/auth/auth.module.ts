import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth-guard';
import { UserAuthService } from './user-auth.service';
import { AuthTokenService } from './auth-token.service';

export { AuthGuard } from './auth-guard';
export { UserAuthService } from './user-auth.service';
export { AuthTokenService } from './auth-token.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuard, UserAuthService, AuthTokenService]
})
export class AuthModule { }
