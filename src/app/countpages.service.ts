import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountpagesService {
 count=0;
 pages:string[]=[];
  countpages(x:number){
     this.count=x;
  }

  pagesVisited(x:string){
  
    this.pages.unshift(x);
  }

  constructor() { }
}
