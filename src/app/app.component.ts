import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MyclassService } from './myclass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'leanobervables';
  navLinks:{link:string,active:string,txt:string}[];

   constructor( private myclassService:MyclassService){}

  ngOnInit(){
    this.myclassService.statusObs$.subscribe(
      status=>{
        console.log("subscribe:"+status);
        this.updateNavBar();
      }
    )
this.updateNavBar();

  }
updateNavBar(){
  var home={link:'./home',active:'active',txt:'Home'};
  // var login={link:'./login',active:'active',txt:'login'};
  // var logout={link:'./logout',active:'active',txt:'Logout'};
  var angular={link:'./angular',active:'active',txt:'Angular'};

  if(this.myclassService.status)
  this.navLinks=[home];
  else
  this.navLinks=[angular];
  // if(this.myclassService.loginStatus)
  // this.navLinks=[home,logout];
  // else
  // this.navLinks=[home,login];
}


}



