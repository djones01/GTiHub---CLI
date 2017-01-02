/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TargetDualSelectComponent } from './target-dual-select.component';

describe('TargetDualSelectComponent', () => {
  let component: TargetDualSelectComponent;
  let fixture: ComponentFixture<TargetDualSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetDualSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDualSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
