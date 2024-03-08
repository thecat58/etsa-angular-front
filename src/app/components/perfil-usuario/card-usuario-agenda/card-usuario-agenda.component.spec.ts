import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsuarioAgendaComponent } from './card-usuario-agenda.component';

describe('CardUsuarioAgendaComponent', () => {
  let component: CardUsuarioAgendaComponent;
  let fixture: ComponentFixture<CardUsuarioAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUsuarioAgendaComponent]
    });
    fixture = TestBed.createComponent(CardUsuarioAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
