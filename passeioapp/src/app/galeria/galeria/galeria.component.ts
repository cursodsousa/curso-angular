import { Component, OnInit } from '@angular/core';
import { LugarService } from '../../lugares/lugar.service';
import { Lugar } from '../../lugares/lugar';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria.model';

@Component({
  selector: 'app-galeria',
  standalone: false,
  
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = []; 

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ){
  }

  ngOnInit(): void {
    this.lugarService.getAll().subscribe({
      next: listaLugares => this.lugares = listaLugares
    })

    this.categoriaService.getAll().subscribe({
      next: listaCategorias => this.categoriasFiltro = listaCategorias 
    })
  }

  getEstrelas(lugar: Lugar) : string {
    return '★'.repeat(lugar.avaliacao || 0) + '☆'.repeat(5 - (lugar.avaliacao || 0));
  }
}
