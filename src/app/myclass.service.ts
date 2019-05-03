import { Injectable } from '@angular/core';
import { observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyclassService {

  statusObs=new Subject <boolean>();
  statusObs$ =this.statusObs.asObservable();
 
  status:boolean=true;

  homeStatus(x:boolean){
  this.status=false;
  this.statusObs.next(this.status);
  console.log("home",this.statusObs)

  } 
  angularStatus(x:boolean){
    this.status=true;
    
    this.statusObs.next(this.status);
    console.log("angular",this.statusObs)
  }



  constructor() { }
}
