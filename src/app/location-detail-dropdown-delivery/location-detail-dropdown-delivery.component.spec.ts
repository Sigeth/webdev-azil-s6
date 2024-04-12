import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailDropdownDeliveryComponent } from './location-detail-dropdown-delivery.component';

describe('LocationDetailDropdownDeliveryComponent', () => {
  let component: LocationDetailDropdownDeliveryComponent;
  let fixture: ComponentFixture<LocationDetailDropdownDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDetailDropdownDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDetailDropdownDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
