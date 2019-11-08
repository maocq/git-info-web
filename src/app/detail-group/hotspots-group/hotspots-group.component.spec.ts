import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotsGroupComponent } from './hotspots-group.component';

describe('HotspotsGroupComponent', () => {
  let component: HotspotsGroupComponent;
  let fixture: ComponentFixture<HotspotsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
