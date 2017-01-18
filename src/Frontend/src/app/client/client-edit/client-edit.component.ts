import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: 'client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
clientForm: FormGroup;
    client: Client;

    onSubmit(client: Client){
        this.clientService.submit(this.client);
        this.reset();
    }

    initClientForm() {
        this.clientForm = this._fb.group({
            name: [this.client.name, Validators.required],
            industry: [this.client.industry, Validators.required]
        });
    }

    reset() {
        this.clientForm.reset();
    }

    constructor(private _fb: FormBuilder, private clientService: ClientService) {
    }

    ngOnInit(): void {   
        this.clientService.editClient.subscribe(client => {
            this.client = client
            this.initClientForm();  
        });        
    }
}
