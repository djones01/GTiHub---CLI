import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from './alert.service';
import { AlertComponent } from './alert.component';

import { GrowlModule } from 'primeng/primeng';

export { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent],
  providers: [AlertService]
})
export class AlertModule { }