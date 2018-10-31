import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao.service';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate{

    constructor(private authService:AutenticacaoService, private router:Router){}

    canActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        if(this.authService.logado){
            return true
        }else{
            this.router.navigate(['/login'])
            return false
        }
    }
}