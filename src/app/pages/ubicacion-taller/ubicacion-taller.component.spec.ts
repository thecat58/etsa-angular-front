import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionTallerComponent } from './ubicacion-taller.component';

describe('UbicacionTallerComponent', () => {
  let component: UbicacionTallerComponent;
  let fixture: ComponentFixture<UbicacionTallerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbicacionTallerComponent]
    });
    fixture = TestBed.createComponent(UbicacionTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
