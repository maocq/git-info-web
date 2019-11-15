import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightsGroupComponent } from './weights-group.component';

describe('WeightsGroupComponent', () => {
  let component: WeightsGroupComponent;
  let fixture: ComponentFixture<WeightsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
