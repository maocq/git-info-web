import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactGroupComponent } from './impact-group.component';

describe('ImpactGroupComponent', () => {
  let component: ImpactGroupComponent;
  let fixture: ComponentFixture<ImpactGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
