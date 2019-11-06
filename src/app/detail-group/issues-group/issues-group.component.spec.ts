import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesGroupComponent } from './issues-group.component';

describe('IssuesGroupComponent', () => {
  let component: IssuesGroupComponent;
  let fixture: ComponentFixture<IssuesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
