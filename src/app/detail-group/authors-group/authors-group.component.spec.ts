import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsGroupComponent } from './authors-group.component';

describe('AuthorsGroupComponent', () => {
  let component: AuthorsGroupComponent;
  let fixture: ComponentFixture<AuthorsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
