import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfgenesenstatusComponent } from './impfgenesenstatus.component';

describe('ImpfgenesenstatusComponent', () => {
  let component: ImpfgenesenstatusComponent;
  let fixture: ComponentFixture<ImpfgenesenstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfgenesenstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfgenesenstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
