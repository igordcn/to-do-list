import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private estaLogado:boolean =false

  constructor(private usuarioService:UsuarioService, private route:Router) { }

  login(email:string, senha:string):void{
    if(!this.estaLogado){
      this.usuarioService.loginUsuario({email:email, senha:senha}).subscribe(log => {
        this.estaLogado = true
        this.route.navigate(['tarefas'])
      },
      httpErrorResponse => {
        alert(httpErrorResponse.error.error)
      })
    }else{
      this.route.navigate(['tarefas'])
    }
  }

  get logado(){ return this.estaLogado }
}
