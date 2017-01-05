import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Map } from "../map";
import { MapService } from "../services/map.service";
import { MapBuilderService } from "../services/map-builder.service";
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {
    public mapForm: FormGroup;

    initMapForm() {
        this.mapForm = this.mapBuilderService.buildMap();
    }

    onSubmit(map: Map) {
        if (this.mapService.editing) {
            this.mapService.update(map);
        }
        else {
            this.mapService.add(map);
        }
        this.initMapForm();
    }

    addTransform() {
        const control = <FormArray>this.mapForm.controls['transformations'];
        control.push(this.mapBuilderService.buildTransform());
    }

    removeTransform(i: number) {
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected transformation?",
            accept: () => {
                const control = <FormArray>this.mapForm.controls['transformations'];
                 control.removeAt(i);
            }
        });      
    }

    constructor(
        private _fb: FormBuilder, 
        private confirmationService: ConfirmationService, 
        private mapService: MapService, 
        private mapBuilderService: MapBuilderService) { }

    ngOnInit() {
        this.mapService.editMap.subscribe(editMap => {
            if (this.mapService.editing) {
                this.mapForm = this.mapBuilderService.buildEditMapForm(editMap);    
            }
            else {
                this.initMapForm();
            }
        });  
    }
}
