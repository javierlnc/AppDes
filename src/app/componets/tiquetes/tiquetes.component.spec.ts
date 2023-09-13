import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiquetesComponent } from './tiquetes.component';

describe('TiquetesComponent', () => {
  let component: TiquetesComponent;
  let fixture: ComponentFixture<TiquetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiquetesComponent]
    });
    fixture = TestBed.createComponent(TiquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
