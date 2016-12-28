/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FieldFormatComponent } from './field-format.component';

describe('FieldFormatComponent', () => {
  let component: FieldFormatComponent;
  let fixture: ComponentFixture<FieldFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
