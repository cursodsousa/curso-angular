import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  apiUrl: string = environment.apiUrl + '/lugares'

  constructor(private http: HttpClient) { }

  save(lugar: Lugar) : Observable<Lugar>{
      return this.http.post<Lugar>(this.apiUrl, lugar);
  }

  getAll(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.apiUrl);
  }
}
