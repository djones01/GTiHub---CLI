import { Component, OnInit } from '@angular/core';
import { Client } from "../client";
import { ClientService } from "../client.service";
import { ConfirmationService } from "primeng/primeng";

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
private showDialog = false;
    private canDelete = false;
    private canEdit = false;
    private clients: Client[];
    private selectedClients: Client[] = [];

    showEditingDialog() {
        this.showDialog = true;
    }

    editClient() {
        this.clientService.setEditClient(this.selectedClients[0]);
        this.showEditingDialog();
    }

    deleteClients() {
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected client(s)?",
            accept: () => {
                this.selectedClients.forEach((c, i) => {
                    this.clientService.delete(c.clientId);
                });  
                this.selectedClients = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;     
    }

    //Update the state of the delete and edit buttons based on row selection
    onRowSelect(event) {
        if (this.selectedClients.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }
    }
    onRowUnselect(event) {
        if (this.selectedClients.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedClients.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }
    }

    constructor(private confirmationService: ConfirmationService, private clientService: ClientService) { }
    ngOnInit() {
        this.clientService.clients.subscribe(clients => this.clients = clients);
    }
}
