/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapFileSelectComponent } from './map-file-select.component';

describe('MapFileSelectComponent', () => {
  let component: MapFileSelectComponent;
  let fixture: ComponentFixture<MapFileSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFileSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
