import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { MessagesComponent } from '../../components/messages/messages.component';

@Component({
  selector: 'app-categoria',
  standalone: false,  
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  camposForm: FormGroup;
  @ViewChild('messages') messages?: MessagesComponent;

  constructor(private service: CategoriaService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  isCampoInvalido(nomeCampo: string, validacao: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && 
          (campo?.touched) && 
          campo?.errors?.[validacao]
  }

  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.service.save(this.camposForm.value as Categoria)
        .subscribe({
          next: response => this.sucesso(response) 
        });
    }
  }

  sucesso(cat: Categoria) {
    this.messages?.show('Cadastrada com sucesso!', 'success');
    this.camposForm.reset();
  }
}
