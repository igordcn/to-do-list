import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa[] = []

  cadastroId:number = 3
  editaId:string
  cadastroResponsavel:string = ''
  cadastroData:string = ''
  cadastroTarefa:string = ''

  modoEditar:boolean = false

  constructor(private tarefaService:TarefaService) { }

  ngOnInit() {
    this.getTarefas()
  }

  private getTarefas():void{
    this.tarefaService.getTarefas().subscribe(tarefas => {
      console.log(tarefas)
      this.tarefas = tarefas
    })
  }

  deletar(id:string):void{
    this.tarefaService.deleteTarefa(id).subscribe(tarefa =>
      this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas)
    )
  }

  cadastrar():void{
    if(this.modoEditar){
      console.log(this.editaId)
      let tarefa = new Tarefa(this.editaId, this.cadastroResponsavel, this.cadastroData, this.cadastroTarefa)
      this.tarefaService.updateTarefa(tarefa).subscribe(tarefa =>{
        this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas)
      })
    }else{
      let tarefa = new Tarefa(undefined, this.cadastroResponsavel, this.cadastroData, this.cadastroTarefa)
      this.tarefaService.createTarefa(tarefa).subscribe(tarefa =>{
        this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas)
      })
    }
  }

  modoCadastro():void{
    this.modoEditar = false
    this.cadastroResponsavel = ''
    this.cadastroData = ''
    this.cadastroTarefa = ''
  }

  modoEdicao(tarefa:Tarefa):void{
    this.modoEditar = true
    this.editaId = tarefa._id
    this.cadastroResponsavel = tarefa.responsavel
    this.cadastroData = tarefa.data
    this.cadastroTarefa = tarefa.descricao
  }
}
