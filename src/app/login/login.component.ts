import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string='';
pwd:string='';
loginFail:boolean=false;

  constructor(private authService:AuthService,private router:Router,
    private route:ActivatedRoute) { }

  loginUser(){
    if(this.uname==this.pwd){
      this.loginFail=false;
      console.log("Logged in user"+this.uname)
      this.authService.login(this.uname);
      this.router.navigate(['/home'])
    }else{
      this.loginFail=true;
    }
  }

  ngOnInit() {
  }

}
