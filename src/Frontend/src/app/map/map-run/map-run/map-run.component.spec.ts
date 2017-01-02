/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapRunComponent } from './map-run.component';

describe('MapRunComponent', () => {
  let component: MapRunComponent;
  let fixture: ComponentFixture<MapRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
