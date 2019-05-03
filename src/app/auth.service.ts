import { Injectable } from '@angular/core';
import { observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   loginStatusObs=new Subject<boolean>();
   loginstatusObs$=this.loginStatusObs.asObservable();

  loginStatus:boolean=false;
  username:string=null;
  

  login(name:string){
    this.loginStatus=true;
    this.username=name;
    this.loginStatusObs.next(this.loginStatus)
    }

  logout(){
    this.loginStatus=false;
    this.username=null;
    this.loginStatusObs.next(this.loginStatus)
  }


  constructor() { }
}


