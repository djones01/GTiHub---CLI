import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Target, TargetField } from "./target";
import { DataService } from "../shared/data/data.module";

@Injectable()
export class TargetService {
private _targets: BehaviorSubject<Target[]> = new BehaviorSubject([]);
    targets: Observable<Target[]> = this._targets.asObservable();
    private _editTarget: BehaviorSubject<Target> = new BehaviorSubject(null);
    editTarget: Observable<Target> = this._editTarget.asObservable();

    private dataStore: {
        targets: Target[]
    };

    loadall() {
        this.dataService.GetAll("Targets")
            .subscribe(targets => {
                this.dataStore.targets = targets;
                this._targets.next(this.dataStore.targets);
            }, error => console.log(error), () => { });
    }

    getTargetFields(targetId: number): Observable<TargetField[]> {
        return this.dataService.Get("Targets/GetTargetFieldsbyTarget", targetId);
    }

    setEditTarget(edit: Target) {
        // Filter target fields for the target being edited
        this.getTargetFields(edit.targetId)
            .subscribe(targetFields => {
                edit.targetFields = targetFields;
                this._editTarget.next(edit);
            },
            error => console.log(error));
    }

    clearEditTarget() {
        this._editTarget.next(null);
    }

    add(target: Target) {
        this.dataService.Add('Targets', target).subscribe(target => {
            this.dataStore.targets.push(target);
            this._targets.next(this.dataStore.targets);
        }, error => console.log(error));
    }

    update(target: Target) {
        this.dataService.Update('Targets', target.targetId, target).subscribe((target: Target) => {
            this.dataStore.targets.forEach((m, i) => {
                if (m.targetId === target.targetId) { this.dataStore.targets[i] = target; }
            });
            this._targets.next(this.dataStore.targets);
        }, error => console.log(error));
    }

    delete(targetId: number) {
        this.dataService.Delete('Targets', targetId).subscribe(response => {
            this.dataStore.targets.forEach((m, i) => {
                if (m.targetId === targetId) { this.dataStore.targets.splice(i, 1); }
            });
            this._targets.next(this.dataStore.targets);
        }, error => console.log(error));
    }

    constructor(private dataService: DataService) {
        this.dataStore = { targets: [] };
        // Get the list of targets
        this.loadall();
    }
}
