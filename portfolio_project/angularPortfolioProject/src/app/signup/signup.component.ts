import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg:string="";
  signUpRef =  new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  })

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  storeInSession(){
    let dataObj = this.signUpRef.value;
    let userFirstName = dataObj.fname;
    let userLastName = dataObj.lname;
    let userName = dataObj.user;
    let userPassword = dataObj.pass;
    sessionStorage.setItem("fname", userFirstName)
    sessionStorage.setItem("lname", userLastName)
    sessionStorage.setItem("user", userName)
    sessionStorage.setItem("pass", userPassword)
    this.router.navigate(["login"]);
  }

  loginPage(){
    this.router.navigate(["login"]);
  }

}
