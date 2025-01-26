import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LugarService } from '../lugar.service';
import { Lugar } from '../lugar';
import { MessagesComponent } from '../../components/messages/messages.component';

@Component({
  selector: 'app-lugar',
  standalone: false,
  
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {

  categorias: Categoria[] = [];
  camposForm: FormGroup;
  @ViewChild('messages') messages?: MessagesComponent;

  constructor(
    private categoriaService: CategoriaService,
    private service: LugarService  
  ){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl(1, Validators.required),
    })
  }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe({
      next: lista => this.categorias = lista
    })
  }

  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.service.save(this.camposForm.value)
        .subscribe({
          next: response => this.successo(response)
        })
    }
  }

  successo(lugar: Lugar){
    this.camposForm.reset();
    this.messages?.show('Cadastrado com sucesso!', 'success');
  }
}
