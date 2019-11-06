import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGroupsComponent } from './info-groups.component';

describe('InfoGroupsComponent', () => {
  let component: InfoGroupsComponent;
  let fixture: ComponentFixture<InfoGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
