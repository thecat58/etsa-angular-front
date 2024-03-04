import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejistroComponent } from './rejistro.component';

describe('RejistroComponent', () => {
  let component: RejistroComponent;
  let fixture: ComponentFixture<RejistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejistroComponent]
    });
    fixture = TestBed.createComponent(RejistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
