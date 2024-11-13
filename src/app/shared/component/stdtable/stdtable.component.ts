import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss'],
  // providers:[StudentService]
})
export class StdtableComponent implements OnInit {
StdArr !: Array<Istd>
  constructor(
    private _stdservice:StudentService
  ) { }

  ngOnInit(): void {
    this.StdArr = this._stdservice.fetchStdData()
  }

  onRemovestd(id:string){
  let getConfirm:boolean = confirm(`Are you sure, you want to remove this student?`);
  if(getConfirm){
    this._stdservice.removestd(id)
  }
  }

}
