import { Component, OnInit } from '@angular/core';
import { user } from './userData';
import { FormGroup,FormControl } from '@angular/forms';
import { RegDataService } from 'src/app/reg-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup
  user: user[]=[]

  register(){
    console.log(this.form.value)
    this.regdataservice.saveData(this.form.value).subscribe(res=>{alert("Data Saved Sucessfully")})
  }
  constructor(private regdataservice:RegDataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        user_fullname: new FormControl(""),
        user_email: new FormControl(""),
        user_phone: new FormControl(""),
        user_name: new FormControl(""),
        user_pass: new FormControl(""),
      })
  } 

}
