import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCartComponent } from './place-cart.component';

describe('PlaceCartComponent', () => {
  let component: PlaceCartComponent;
  let fixture: ComponentFixture<PlaceCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
