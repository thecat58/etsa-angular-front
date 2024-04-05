import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgendaComponent } from './modal-agenda.component';

describe('ModalAgendaComponent', () => {
  let component: ModalAgendaComponent;
  let fixture: ComponentFixture<ModalAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgendaComponent]
    });
    fixture = TestBed.createComponent(ModalAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
