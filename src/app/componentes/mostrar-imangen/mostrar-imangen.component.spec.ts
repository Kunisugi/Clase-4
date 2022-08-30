import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarImangenComponent } from './mostrar-imangen.component';

describe('MostrarImangenComponent', () => {
  let component: MostrarImangenComponent;
  let fixture: ComponentFixture<MostrarImangenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarImangenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarImangenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
