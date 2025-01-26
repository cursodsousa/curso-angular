import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl: string = environment.apiUrl + '/categorias'

  constructor(private http: HttpClient) { }

  save(cat: Categoria) : Observable<Categoria>{
    return this.http.post<Categoria>(this.apiUrl, cat);
  }

  getAll() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
}
