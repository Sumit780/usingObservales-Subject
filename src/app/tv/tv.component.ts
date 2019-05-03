import { Component, OnInit } from '@angular/core';
import { CountpagesService } from '../countpages.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  count:number=0;
  name:string='tv'
 
  constructor( private countpagesService:CountpagesService) { }

  ngOnInit() {
    let num = this.countpagesService.count;
    this.count = num+1;
    this.countpagesService.countpages(this.count);
    this.countpagesService.pagesVisited(this.name);
   
  }

}
