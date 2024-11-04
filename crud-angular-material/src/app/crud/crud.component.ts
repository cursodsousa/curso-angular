import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CrudService } from './crud.service';
import { Cliente } from './Cliente';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor(
    private service: CrudService,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query : any) => {
      const params = query['params']
      const id = params['id'];
      if(id){
        this.cliente = this.service.buscarPorId(id) ?? Cliente.newCliente();
        this.atualizando = true;
      }
    })
  }

  adicionar(){
    this.service.adicionar(this.cliente);
    this.cliente = Cliente.newCliente();
  }

  atualizar(){
    this.service.atualizar(this.cliente);
    this.cliente = Cliente.newCliente();
    this.atualizando = false;
  }

  listar(){
    console.table(this.service.listar())
  }

  limpar(){
    this.cliente = Cliente.newCliente();
    this.atualizando = false;
  }
}
