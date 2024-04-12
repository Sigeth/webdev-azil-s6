import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailDropdownAdministrativeComponent } from './location-detail-dropdown-administrative.component';

describe('LocationDetailDropdownAdministrativeComponent', () => {
  let component: LocationDetailDropdownAdministrativeComponent;
  let fixture: ComponentFixture<LocationDetailDropdownAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDetailDropdownAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDetailDropdownAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
