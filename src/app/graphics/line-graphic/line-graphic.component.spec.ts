import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraphicComponent } from './line-graphic.component';

describe('LineGraphicComponent', () => {
  let component: LineGraphicComponent;
  let fixture: ComponentFixture<LineGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
