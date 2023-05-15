import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import {usuariosGit} from '../Modelos/usuariosViewModel';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url : string = 'https://api.github.com/users/';
  constructor(private http:HttpClient) {}

  getUsuarios(nombre:string):Observable<usuariosGit>{
    return this.http.get<usuariosGit>(`${this.url}${nombre}`);
  }
  
}
