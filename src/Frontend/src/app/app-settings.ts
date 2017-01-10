import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings{
api_url: string;
base_url: string;

  constructor(){
      this.api_url = "http://localhost:5000/api/";
      this.base_url = "http://localhost:5000";
    }
  }