import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CountpagesService } from '../countpages.service';
import { MyclassService } from '../myclass.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   status:boolean=true;
  //  username:string="Test User";

  // count:number;
  // name:string='home';
  // names:string[]=[];
  constructor(private myclassService:MyclassService,private router:Router,private route:ActivatedRoute ) { }
  onStart(){
  
    this.myclassService.homeStatus(this.status);
    this.router.navigate(['./angular']);
    this.status=false;
    this.myclassService.homeStatus(this.status);
  }

  ngOnInit() {
    this.myclassService.homeStatus(this.status);
    // this.status= this.myclassService.loginStatus;
    // this.username= this.myclassService.username
  //  let num=this.countpages.count;
  //  this.count=num+1
  //  this.countpagesService.countpages(this.count);
  //  this.countpagesService.pagesVisited(this.name);
  //  this.count =this.countpagesService.count;
  //  this.names=this.countpagesService.pages;
   
  }

}
