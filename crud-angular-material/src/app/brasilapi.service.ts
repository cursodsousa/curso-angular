import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from './brasilapi.models';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {

  baseURL: string = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) { }

  listarUFs() : Observable<Estado[]> {
    const path = '/ibge/uf/v1';
    return this.http.get<Estado[]>(this.baseURL + path);
  }

  listarMunicipios(uf: string) : Observable<Municipio[]> {
    const path = '/ibge/municipios/v1/' + uf
    return this.http.get<Municipio[]>(this.baseURL + path);
  }
}
