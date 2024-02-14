import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerfilDatosComponent } from './card-perfil-datos.component';

describe('CardPerfilDatosComponent', () => {
  let component: CardPerfilDatosComponent;
  let fixture: ComponentFixture<CardPerfilDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPerfilDatosComponent]
    });
    fixture = TestBed.createComponent(CardPerfilDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
