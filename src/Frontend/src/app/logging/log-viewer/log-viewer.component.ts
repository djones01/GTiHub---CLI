import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {

  }

}
