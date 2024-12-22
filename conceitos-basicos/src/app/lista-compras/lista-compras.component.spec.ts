import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComprasComponent } from './lista-compras.component';

describe('ListaComprasComponent', () => {
  let component: ListaComprasComponent;
  let fixture: ComponentFixture<ListaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
