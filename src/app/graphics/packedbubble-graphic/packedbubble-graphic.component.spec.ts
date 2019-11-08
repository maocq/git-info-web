import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedbubbleGraphicComponent } from './packedbubble-graphic.component';

describe('PackedbubbleGraphicComponent', () => {
  let component: PackedbubbleGraphicComponent;
  let fixture: ComponentFixture<PackedbubbleGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackedbubbleGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedbubbleGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
