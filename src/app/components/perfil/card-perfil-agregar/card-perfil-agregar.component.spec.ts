import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerfilAgregarComponent } from './card-perfil-agregar.component';

describe('CardPerfilAgregarComponent', () => {
  let component: CardPerfilAgregarComponent;
  let fixture: ComponentFixture<CardPerfilAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPerfilAgregarComponent]
    });
    fixture = TestBed.createComponent(CardPerfilAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
