import { Component, Output, OnInit, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";
import {  PhoneNumberValidation } from "../../classes/PhoneNumberValidation";
import { cardNumber } from "../../CardNumber";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  
  registrationForm: FormGroup;
  fName:string;mName:string;lName:string;phone:string;confPhone:string;info:string;age:number;hospId:number;
  customerInfo:Array<Customer>=[];
  num:number;
  hospitalId:number;
  id:number;
  alert:string;
  cardInfo:any;
  customerData:any={};
  card_Number:string;
  autoGenerater:boolean;
  auto:any=[];
  constructor(private router: Router,private formBuilder: FormBuilder,private dataService:DataService,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    
    // this.generate();
    this.isGenerate();
    this.getCardNumberStatus();
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['' ,[Validators.required, Validators.pattern("^[+][0,1,2,3,4,5,6,7,8,9]{12}$")]],
      confirmPhoneNumber:['',Validators.required],
      customerCardNo: ['', Validators.required],
      custAge: ['',Validators.required]
    },{
      validator: PhoneNumberValidation.MatchPhoneNumber // Custom validation method
    });
   
  }

  isGenerate(){
    this.dataService.isAutoGenerate().subscribe((res:any[])=>{
      this.auto=res;
      this.autoGenerater=this.auto[0].autoGenerate;
  
    });
  }
  get f(){
    return this.registrationForm.controls;
  }
  generate(){
    // this.id=this.setHospitalId();  
    this.dataService.getCardNumber()
      .subscribe((result:any)=>{
        this.cardInfo=result,
        this.card_Number=result.generated;
        this.fName=this.f.firstName.value;this.mName=this.f.middleName.value;
        this.lName=this.f.lastName.value;this.phone=this.f.phoneNumber.value;
        this.age=this.f.custAge.value;
        this.confPhone=this.f.confirmPhoneNumber.value;
        this.registrationForm.setValue(
          {
            firstName:this.fName,
            middleName:this.mName,
            lastName:this.lName,
            phoneNumber:this.phone,
            confirmPhoneNumber:this.confPhone,
            customerCardNo:this.card_Number,
            custAge:this.age,
            
          }
      );

      });
    } 

setHospitalId():number{
  this.hospitalId=2;
  return this.hospitalId;
}
 

getCardNumberStatus(){
  return this.autoGenerater;
}

openModal(modal,myBtn){

   // When the user clicks the button, open the modal 
  modal.style.display = "block";
}

appoint(){
  this.dataSharingService.sendInfo(this.customerInfo);
  this.router.navigateByUrl('register/appointment');
}

goBack(){
  this.router.navigateByUrl('get/customerlist');
}

success(){
  
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  this.alert="Registration is Successful !!!";
  this.openModal(modal,btn);

}

onSubmit() {
    if(this.registrationForm.valid){

      // alert(JSON.stringify(this.registrationForm.value))
      
      this.customerData.custAge=this.f.custAge.value;
      this.customerData.firstName=this.f.firstName.value;
      this.customerData.middleName=this.f.middleName.value;
      this.customerData.lastName=this.f.lastName.value;
      this.customerData.phoneNumber=this.f.phoneNumber.value;
      this.customerData.customerCardNo=this.f.customerCardNo.value;

      
      this.dataService.postRegisterInfo(this.customerData)
        .subscribe((result:any)=>{
          this.customerInfo=result;
          alert(JSON.stringify(this.customerInfo));
          this.success();
        });
        
    }
  }

}
