import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailDropdownComponent } from './location-detail-dropdown.component';

describe('LocationDetailDropdownComponent', () => {
  let component: LocationDetailDropdownComponent;
  let fixture: ComponentFixture<LocationDetailDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDetailDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationDetailDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
