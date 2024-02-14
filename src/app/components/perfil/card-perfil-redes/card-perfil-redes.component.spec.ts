import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerfilRedesComponent } from './card-perfil-redes.component';

describe('CardPerfilRedesComponent', () => {
  let component: CardPerfilRedesComponent;
  let fixture: ComponentFixture<CardPerfilRedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPerfilRedesComponent]
    });
    fixture = TestBed.createComponent(CardPerfilRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
