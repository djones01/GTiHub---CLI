import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  messages: Message[] = [];
 
  constructor(private alertService: AlertService) { }
 
  ngOnInit() {
      this.alertService.message.subscribe(message => {
        if(message)
          this.messages.push(message)
      });
  }
}
