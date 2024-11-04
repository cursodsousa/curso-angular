import { Injectable } from '@angular/core';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  adicionar(cliente: Cliente){
    cliente.version = cliente.version++;
    let clientes: Cliente[] = this.listar();
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }

  atualizar(cliente: Cliente){
    cliente.version = cliente.version++;
    let clientes: Cliente[] = this.listar();
    clientes.map(c => {
      if(c.id === cliente.id){
        Object.assign(c, cliente);
      }
    })
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }

  listar() : Cliente[] {
    const clientesJSON = localStorage.getItem('clientes');
    
    if(!clientesJSON){
      return [];
    } else{
      return JSON.parse(clientesJSON);
    }
  }

  buscar(nome: string): Cliente[] {
    if(!nome){
      return this.listar();
    }
    return this.listar().filter(cliente => cliente.nome.indexOf(nome) === 0);
  }

  buscarPorId(id: string) : Cliente | undefined {
    const lista = this.listar();
    return lista.find(cliente => cliente.id === id)
  }
}
