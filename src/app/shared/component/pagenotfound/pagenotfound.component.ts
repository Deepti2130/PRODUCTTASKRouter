import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {
getmsgFromRoute!:string
  constructor(
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
  //   // this._routes.data
  //   // .subscribe((data)=>{
  //   //   console.log(data)
  //   //   this.getmsgFromRoute = data['msg']
  //   })
  // } it is use for if we in same page and data will be change

  this.getmsgFromRoute = this._routes.snapshot.data['msg']
}
}
