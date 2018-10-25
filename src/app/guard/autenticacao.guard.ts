import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao.service';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate{

    constructor(private authService:AutenticacaoService){}

    canActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        return this.authService.logado
    }
}