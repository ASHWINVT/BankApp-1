import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim ="YOUR PERFECT BANKING PARTNER"
  account = "account number"

  constructor() { }

  ngOnInit(): void {
  }

}
