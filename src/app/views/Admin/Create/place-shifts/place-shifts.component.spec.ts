import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceShiftsComponent } from './place-shifts.component';

describe('PlaceShiftsComponent', () => {
  let component: PlaceShiftsComponent;
  let fixture: ComponentFixture<PlaceShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
