import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { MapService } from "../../services/map.service";
import { MapBuilderService } from "../../services/map-builder.service";
import { Map } from "../../map";

@Component({
  selector: 'transformation-edit',
  templateUrl: './transformation-edit.component.html',
  styleUrls: ['./transformation-edit.component.css']
})
export class TransformationEditComponent {
    @Input('group')
    transForm: FormGroup;
    @Input('i')
    i: number;

    addCondition() {
        const control = <FormArray>this.transForm.controls['conditions'];
        control.push(this.mapBuilderService.buildCondition());
    }
    removeCondition(i: number) {
        let x = i;
        const control = <FormArray>this.transForm.controls['conditions'];
        // renumber the seqnums of other source fields
        for (x; x < control.length; x++) {
            let group = <FormGroup>control.at(x);
            let newVal = group.controls['seqNum'].value - 1;
            group.controls['seqNum'].setValue(newVal);
        }
        this.mapBuilderService.condSeqNum--;
        control.removeAt(i);
    }

    constructor(private mapService: MapService, private mapBuilderService: MapBuilderService) {}
}
