import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  model:any={}
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      User_Name: ['', Validators.required],
      Password: ['', Validators.required]
      
    });

  }

  onSubmit() {
    if(this.loginForm.valid){
      // this.adminService.registerHospital(this.registrationForm.value)
      alert(JSON.stringify(this.loginForm.value))
    }
  }

}


