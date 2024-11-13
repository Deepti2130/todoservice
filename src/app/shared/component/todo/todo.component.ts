import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../service/todoservice.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todoArr! :Array<Itodo>
  constructor(
    private _todoservice : TodoserviceService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoservice.fetchAlltodos()
  }

  onTodoRemove(todoId:string){
  console.log(todoId)
  this._todoservice.removeTodo(todoId)
  }

}
