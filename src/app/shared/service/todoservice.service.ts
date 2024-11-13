import { inject, Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
 todoArr : Array<Itodo>= [
  {
    todoItem:"Angular",
    todoId:"123"
  },
  {
    todoItem:"Rxjs",
    todoId:"124"
  }
 ]

 private _snackBarService = inject(SnackBarService)
  constructor() {}



    //API call to fetch all todo
    fetchAlltodos():Array<Itodo>{
    return this.todoArr
    }

    addnewTodo(todo : Itodo){
   //API call to add the new todo
   this.todoArr.push(todo)

   //msg for new todo add
   this._snackBarService.opensnackBar(`New Todo ${todo.todoItem} Added successfully!!!`)
    }


    removeTodo(id:string){
      //API call to remove todo from DB
      let getIndex = this.todoArr.findIndex(todo=>todo.todoId === id)
      console.log(getIndex)
      let removeobj=this.todoArr[getIndex]
      this.todoArr.splice(getIndex,1)

      //msg for remove todo
   this._snackBarService.opensnackBar(`TodoItem ${removeobj.todoItem} is removed successfully`)
    }
}
