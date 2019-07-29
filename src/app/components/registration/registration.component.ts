import { Component, Output, OnInit, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";
import {  PasswordValidation } from "../../classes/PasswordValidation";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  
  registrationForm: FormGroup;
  userData:any={};
  userInfo:any={};
  check:boolean;
  constructor(private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dataService:DataService,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      DOB: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['' ,Validators.required],
      confirmPassword:['',Validators.required],
      isTalent:['',Validators.required]

    },{
      validator: PasswordValidation.MatchPassword // Custom validation method
    });
   
  }

  get f(){
    return this.registrationForm.controls;
  } 


// appoint(){
//   this.dataSharingService.sendInfo(this.customerInfo);
//   this.router.navigateByUrl('register/appointment');
// }

// goBack(){
//   this.router.navigateByUrl('get/customerlist');
// }

showSuccess(message:string) {
  this.toastr.success(message);
}
showError(message:string) {
  this.toastr.error(message);
}

onSubmit() {
    if(this.registrationForm.valid){

      // alert(JSON.stringify(this.registrationForm.value))
      this.userData.firstName=this.f.firstName.value;
      this.userData.lastName=this.f.lastName.value;
      this.userData.dob=this.f.DOB.value;
      this.userData.emailAddress=this.f.email.value;
      this.userData.pass=this.f.password.value;
      if(this.f.isTalent.value == "talent"){
        this.check = true
      }
      else{
        this.check = false
      }
      this.userData.isTalent = this.check;
      // this.showSuccess("Registration Successful !!!");

      this.dataService.postRegisterInfo(this.userData)
        .subscribe((result:any)=>{
          if(result.message == "Successful"){
            this.userInfo=result;
            this.showSuccess("Registration Successful !!!");
            this.router.navigateByUrl('login');
          }
          else{
            this.showError("Registration Failed !!!");    
          }
        });
        
    }
  }

  index(){
    this.router.navigateByUrl('index');
  }

}
