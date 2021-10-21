import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginseiteComponent } from './loginseite.component';

describe('LoginseiteComponent', () => {
  let component: LoginseiteComponent;
  let fixture: ComponentFixture<LoginseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginseiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
