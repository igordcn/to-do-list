import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../model/tarefa';
import { catchError } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  url = 'api/tarefas'

  constructor(private http:HttpClient) { }

  getTarefas():Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.url).pipe(
      catchError(error => {
        console.log(error)
        return of([] as Tarefa[])
      })
    )
  }

  createTarefa(tarefa:Tarefa):Observable<Tarefa>{
    return this.http.post<Tarefa>(this.url, tarefa,httpOptions).pipe(
      catchError(error => {
        console.log(error)
        return of(null)     
      })
    )
  }

  updateTarefa(tarefa:Tarefa):Observable<any>{
    return this.http.put<Tarefa>(this.url, tarefa,httpOptions).pipe(
      catchError(error => {
        console.log(error)
        return of(null)
      })
    )
  }

  deleteTarefa(tarefaid:number):Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.url}/${tarefaid}`).pipe(
      catchError(error => {
        console.log(error)
        return of(null)
      })
    )
  }
}
