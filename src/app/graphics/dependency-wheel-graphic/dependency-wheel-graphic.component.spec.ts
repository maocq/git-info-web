import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyWheelGraphicComponent } from './dependency-wheel-graphic.component';

describe('DependencyWheelGraphicComponent', () => {
  let component: DependencyWheelGraphicComponent;
  let fixture: ComponentFixture<DependencyWheelGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyWheelGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyWheelGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
