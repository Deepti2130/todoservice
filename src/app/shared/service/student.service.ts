import { inject, Injectable } from '@angular/core';
import { Istd } from '../model/std';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
//DB
  stdArr:Array<Istd> = [
    {
      fname:"Kriti",
      lname:"patil",
      email:"kp@gmail.com",
      contact:9089675645,
      id:"123"
    },
    {
      fname:"Rashmi",
      lname:"Rane",
      email:"rr@gmail.com",
      contact:7867555645,
      id:"124"
    },
    {
      fname:"Leena",
      lname:"Desoza",
      email:"ld@gmail.com",
      contact:9489671233,
      id:"125"
    },
    {
      fname:"Mohan",
      lname:"Jedhe",
      email:"mj@gmail.com",
      contact:8878675645,
      id:"125"
    }
  ]

  private _snackBarservice = inject(SnackBarService)
  // constructor() { }

  fetchStdData(){
    //API call to fetch all std data
    return this.stdArr
  }

  //API call to add the new std
  addnewStd(std:Istd){
    this.stdArr.push(std)
    this._snackBarservice.opensnackBar(`The new student ${std.fname} ${std.lname} is added successfully`)

  }

  removestd(id:string){
    //API call to remove std
    let getIndex = this.stdArr.findIndex(std=> std.id === id)

    let removeobj=this.stdArr[getIndex]

    this.stdArr.splice(getIndex,1);

    this._snackBarservice.opensnackBar(`Student ${removeobj.fname} ${removeobj.lname} is removed successfully`)
  }
}
