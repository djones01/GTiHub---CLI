import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ProjectLogsComponent } from './project-logs/project-logs.component';
import { LogViewerComponent } from './log-viewer/log-viewer.component';

// third party modules
import { TreeModule } from 'primeng/primeng';

import { LoggingService } from './logging.service';

@NgModule({
  imports: [
    CommonModule,
    TreeModule
  ],
  declarations: [ProjectLogsComponent, LogViewerComponent],
  exports: [ProjectLogsComponent],
  providers: [LoggingService]
})
export class LoggingModule { }
