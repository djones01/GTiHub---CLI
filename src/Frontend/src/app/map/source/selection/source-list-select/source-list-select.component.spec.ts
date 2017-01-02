/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SourceListSelectComponent } from './source-list-select.component';

describe('SourceListSelectComponent', () => {
  let component: SourceListSelectComponent;
  let fixture: ComponentFixture<SourceListSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceListSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
