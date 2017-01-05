import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingDotsComponent } from './loading-dots/loading-dots.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingDotsComponent],
  exports: [LoadingDotsComponent]
})
export class UiModule { }
