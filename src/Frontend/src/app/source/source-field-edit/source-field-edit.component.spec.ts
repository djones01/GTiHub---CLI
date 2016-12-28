/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SourceFieldEditComponent } from './source-field-edit.component';

describe('SourceFieldEditComponent', () => {
  let component: SourceFieldEditComponent;
  let fixture: ComponentFixture<SourceFieldEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFieldEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFieldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
