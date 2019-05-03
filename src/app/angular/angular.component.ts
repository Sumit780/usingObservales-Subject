import { Component, OnInit } from '@angular/core';
import { MyclassService } from '../myclass.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
 
  status:boolean=true;

  constructor(private myclassService:MyclassService,private router:Router,private route:ActivatedRoute) { }

  onStop(){
    this.myclassService.angularStatus(this.status);
    this.router.navigate(['./home']);
    this.status=false;
    this.myclassService.angularStatus(this.status);
  }

  ngOnInit() {
   this.status=this.myclassService.status;
 
  }

}
