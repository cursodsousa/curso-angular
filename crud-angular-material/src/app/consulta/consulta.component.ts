import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrudService } from '../crud/crud.service';
import { Cliente } from '../crud/Cliente';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = [];
  nomeBusca: string = '';
  colunasTabela: string[] = ['nome', 'cpf', 'email', 'dataNascimento', 'acoes'];

  constructor(private service: CrudService, private router: Router){}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() : void {
    this.listaClientes = this.service.buscar(this.nomeBusca);
  }

  preparaEditar(id: string) {
    this.router.navigate([`/cadastro`], { queryParams: { id } } )
  }
}
