import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userNames:Array<string>= new Array();
  userContacts:Array<string>= new Array();
  constructor() { }

  ngOnInit(): void {
  }
  userValue = sessionStorage.getItem("fname");

  addNameData(name:any){
    this.userNames.push(name);
  }
  addPhoneData(contact:any){
    this.userContacts.push(contact);
  }
}
