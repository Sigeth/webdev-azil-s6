import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailInformationsComponent } from './location-detail-informations.component';

describe('LocationDetailInformationsComponent', () => {
  let component: LocationDetailInformationsComponent;
  let fixture: ComponentFixture<LocationDetailInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDetailInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDetailInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
