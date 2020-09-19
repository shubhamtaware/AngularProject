import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()
    const target= event.target
    const username=target.querySelector('#inputEmail').value
    const password=target.querySelector('#inputPassword').value
    console.log(username,password)
  }

}
