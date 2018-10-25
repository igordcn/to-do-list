import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginPageComponent }   from './login-page/login-page.component';
import { ListaDeTarefasComponent } from './lista-de-tarefas/lista-de-tarefas.component';
import { AutenticacaoGuard } from './guard/autenticacao.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'tarefas', component: ListaDeTarefasComponent, canActivate: [AutenticacaoGuard] },
  { path: '**', component: PageNotFoundComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}