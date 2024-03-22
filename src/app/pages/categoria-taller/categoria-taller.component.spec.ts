import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTallerComponent } from './categoria-taller.component';

describe('CategoriaTallerComponent', () => {
  let component: CategoriaTallerComponent;
  let fixture: ComponentFixture<CategoriaTallerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaTallerComponent]
    });
    fixture = TestBed.createComponent(CategoriaTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
