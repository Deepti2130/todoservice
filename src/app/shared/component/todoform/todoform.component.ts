import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoserviceService } from '../../service/todoservice.service';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';
import { UuidService } from '../../service/uuid.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
@ViewChild("todoform") todoform! :NgForm
  constructor(
    private _todoservice : TodoserviceService,
    private _uuidservice : UuidService,

  ) { }

  ngOnInit(): void {
  }



  onAddtodo(){
    if(this.todoform.valid){
    let todoobj:Itodo ={...this.todoform.value, todoId:this._uuidservice.generateUuid()};
    // todoobj.todoId = this._uuidservice.generateUuid()
    console.log(todoobj)
    this._todoservice.addnewTodo(todoobj)
    this.todoform.reset()


    }

  }

}
