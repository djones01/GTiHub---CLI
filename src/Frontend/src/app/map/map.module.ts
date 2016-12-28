import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapFileSelectComponent } from './run-map/map-file-select/map-file-select.component';
import { MapOptionsComponent } from './run-map/map-options/map-options.component';
import { MapRunComponent } from './run-map/map-run/map-run.component';
import { TransformationEditComponent } from './transformation/transformation-edit/transformation-edit.component';
import { ConditionEditComponent } from './transformation/condition/condition-edit/condition-edit.component';
import { RuleEditComponent } from './transformation/rule/rule-edit/rule-edit.component';
import { RuleSourceFieldEditComponent } from './transformation/rule/rule-source-field-edit/rule-source-field-edit.component';
import { DateFormatComponent } from './transformation/rule/date-format/date-format.component';
import { FieldFormatComponent } from './transformation/rule/field-format/field-format.component';
import { MapEditComponent } from './map-edit/map-edit.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapOverviewComponent } from './map-overview/map-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapFileSelectComponent, MapOptionsComponent, MapRunComponent, TransformationEditComponent, ConditionEditComponent, RuleEditComponent, RuleSourceFieldEditComponent, DateFormatComponent, FieldFormatComponent, MapEditComponent, MapListComponent, MapOverviewComponent]
})
export class MapModule { }
