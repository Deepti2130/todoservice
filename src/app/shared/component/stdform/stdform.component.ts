import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Istd } from '../../model/std';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss'],
  // providers:[StudentService]
})
export class StdformComponent implements OnInit {
  StdArr !: Array<Istd>
  @ViewChild('stdform') stdform!:NgForm
  constructor(
    private _stdservice:StudentService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
    this.StdArr = this._stdservice.fetchStdData()
  }

  onstdAdd(){
  if(this.stdform.valid){
    let stdobj:Istd = {...this.stdform.value, id:this._uuidservice.generateUuid()};
    console.log(stdobj)
    this._stdservice.addnewStd(stdobj)
    this.stdform.reset()
  }
  }
}
