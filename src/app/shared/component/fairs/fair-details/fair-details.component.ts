import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fairs';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
fairId! : string

fairobj! :Ifair
  constructor(
    private _routes:ActivatedRoute,
    private _fairservice:FairsService
  ) { }

  ngOnInit(): void {
//higher order obbservables
    this._routes.params
    .subscribe((params:Params)=>{
      // console.log(params)
      this.fairId = params['fairId'];

      if(this.fairId){
       this._fairservice.fetchFair(this.fairId)
       .subscribe(data=>{
        this.fairobj = data  //it gives single fair obj details
       })
      }
    })
  }

}
