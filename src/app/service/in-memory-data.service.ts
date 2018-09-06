import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tarefa } from '../model/tarefa';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const tarefas:Tarefa[] = [
      {id: 1, responsavel: 'Igor', descricao: 'Fazer trabalho de POO', data: '2018-09-05'},
      {id: 2, responsavel: 'Severino', descricao: 'Painel BI', data: '2018-09-11'},
      {id: 3, responsavel: 'Renato', descricao: 'Ajustar o Framework', data: '2018-08-17'}
    ]
    return { tarefas }
  }
  constructor() { }
}