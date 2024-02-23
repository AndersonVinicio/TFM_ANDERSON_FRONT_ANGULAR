import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCuadroDialogoComponent } from './componente-cuadro-dialogo.component';

describe('ComponenteCuadroDialogoComponent', () => {
  let component: ComponenteCuadroDialogoComponent;
  let fixture: ComponentFixture<ComponenteCuadroDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCuadroDialogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteCuadroDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
