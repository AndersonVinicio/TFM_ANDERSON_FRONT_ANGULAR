import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCitasComponent } from './view-citas.component';

describe('ViewCitasComponent', () => {
  let component: ViewCitasComponent;
  let fixture: ComponentFixture<ViewCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
