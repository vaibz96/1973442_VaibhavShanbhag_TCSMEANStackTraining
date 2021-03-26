import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
  loginRef =  new FormGroup({
    user:new FormControl(),
    pass:new FormControl(),
  })

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginRef.value)
    let inputUser = this.loginRef.get("user")?.value;
    let inputPass = this.loginRef.get("pass")?.value;
    let userValue = sessionStorage.getItem("user")
    let passValue = sessionStorage.getItem("pass")
    if(inputUser==userValue && inputPass==passValue){
      this.router.navigate(["dashboard"]);
    }else{
      this.msg = "Login Failed Please Signup, If Already user Please try Again with proper Credentials";
    }
    // write the if condition that will help you to login also, if everything is successfull add a random token into the storage session
    
  }

  signUpPage(){
    this.router.navigate(["signup"]);
  }

}
