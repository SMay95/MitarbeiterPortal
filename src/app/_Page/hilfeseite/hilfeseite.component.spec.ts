import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilfeseiteComponent } from './hilfeseite.component';

describe('HilfeseiteComponent', () => {
  let component: HilfeseiteComponent;
  let fixture: ComponentFixture<HilfeseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HilfeseiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HilfeseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
