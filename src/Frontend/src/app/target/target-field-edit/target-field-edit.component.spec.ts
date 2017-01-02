/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TargetFieldEditComponent } from './target-field-edit.component';

describe('TargetFieldEditComponent', () => {
  let component: TargetFieldEditComponent;
  let fixture: ComponentFixture<TargetFieldEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetFieldEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetFieldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
