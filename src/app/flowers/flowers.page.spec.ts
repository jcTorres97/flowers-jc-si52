import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersPage } from './flowers.page';

describe('FlowersPage', () => {
  let component: FlowersPage;
  let fixture: ComponentFixture<FlowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
