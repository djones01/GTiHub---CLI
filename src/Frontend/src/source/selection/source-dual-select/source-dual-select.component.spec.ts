/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SourceDualSelectComponent } from './source-dual-select.component';

describe('SourceDualSelectComponent', () => {
  let component: SourceDualSelectComponent;
  let fixture: ComponentFixture<SourceDualSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceDualSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDualSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
