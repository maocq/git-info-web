import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrsGroupComponent } from './prs-group.component';

describe('PrsGroupComponent', () => {
  let component: PrsGroupComponent;
  let fixture: ComponentFixture<PrsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
