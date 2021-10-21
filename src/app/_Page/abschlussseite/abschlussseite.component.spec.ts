import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbschlussseiteComponent } from './abschlussseite.component';

describe('AbschlussseiteComponent', () => {
  let component: AbschlussseiteComponent;
  let fixture: ComponentFixture<AbschlussseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbschlussseiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbschlussseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
