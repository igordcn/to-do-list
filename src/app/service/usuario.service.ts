import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../model/usuario';
import { Login } from  '../model/login';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuarios'

  constructor(private http:HttpClient) { }

  registerUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}/register`, usuario,httpOptions)
  }

  loginUsuario(login:Login):Observable<Login>{
    return this.http.post<Login>(`${this.url}/login`, login, httpOptions)
  }
}
