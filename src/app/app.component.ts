import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todoservice';

  constructor(
    private _http :HttpClient
  ){

  }

  ngOnInit(): void {
  this._http.get('https://jsonplaceholder.typicode.com/posts')
   .subscribe(data=>{
    console.log(data)
   })
  }


}
