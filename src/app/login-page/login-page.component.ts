import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { Login } from  '../model/login';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  })

  registerForm = this.formBuilder.group({
    nomeUsuario: ['', [Validators.required, Validators.minLength(4)]],
    emailUsuario: ['',[Validators.required, Validators.email]],
    senhaUsuario: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(16)]]
  })

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private route:Router, private authService:AutenticacaoService) { }

  ngOnInit() {
    
  }

  get login() { return this.loginForm.get('login') }

  get password() { return this.loginForm.get('password') }

  logar(){
    this.authService.login(this.login.value, this.password.value)
  }

  get nomeUsuario(){ return this.registerForm.get('nomeUsuario')}

  get emailUsuario(){ return this.registerForm.get('emailUsuario')}

  get senhaUsuario(){ return this.registerForm.get('senhaUsuario')}

  resetarForm(){
    this.registerForm.patchValue({
      nomeUsuario: '',
      emailUsuario: '',
      senhaUsuario: ''
    })
  }

  registrar(){
    let usuario:Usuario = 
    { 
      _id: null,
      nome: this.nomeUsuario.value, 
      email: this.emailUsuario.value, 
      password: this.senhaUsuario.value
    }
    this.usuarioService.registerUsuario(usuario).subscribe(usr => console.log(usr))
  }

}
