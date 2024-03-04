import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonaComponent } from './card-persona.component';

describe('CardPersonaComponent', () => {
  let component: CardPersonaComponent;
  let fixture: ComponentFixture<CardPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonaComponent]
    });
    fixture = TestBed.createComponent(CardPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
