import { Component, OnInit } from '@angular/core';
import { CountpagesService } from '../countpages.service';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})

export class MobileComponent implements OnInit {
 count:number=0;
  name:string="mobile";
  constructor(private countpagesService:CountpagesService) { }

  ngOnInit() {
     let num=this.countpagesService.count;
      this.count =num +1;
      this.countpagesService.countpages(this.count);
      this.countpagesService.pagesVisited(this.name);
  }

}
