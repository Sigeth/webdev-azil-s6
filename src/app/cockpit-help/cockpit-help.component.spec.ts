import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitHelpComponent } from './cockpit-help.component';

describe('CockpitHelpComponent', () => {
  let component: CockpitHelpComponent;
  let fixture: ComponentFixture<CockpitHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CockpitHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CockpitHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
