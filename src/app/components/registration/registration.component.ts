import { Component, Output, OnInit, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";
import { cardNumber } from "../../CardNumber";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrationForm: FormGroup;
  fName:string;mName:string;lName:string;phone:string;info:string;age:number;hospId:number;
  customerInfo:Array<Customer>=[];
  num:number;
  hospitalId:number;
  id:number;
  alert:string;
  cardInfo:any;
  card_Number:string;
  autoGenerate:boolean;
  constructor(private router: Router,private formBuilder: FormBuilder,private dataService:DataService,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.getCardNumberStatus();
    // this.generate();
    this.setHospitalId();
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['' ,[Validators.required, Validators.pattern("^[0][0,1,2,3,4,5,6,7,8,9]{9}$")]],
      customerCardNo: ['', Validators.required],
      custAge: ['', Validators.required],
      hospitalId: [2,Validators.required]
    });
   
  }

  get f(){
    return this.registrationForm.controls;
  }
  generate(){
    this.id=this.setHospitalId();  
    this.dataService.getCardNumber(this.id)
      .subscribe((result:any)=>{
        this.cardInfo=result,
        this.card_Number=result.generated;
        this.fName=this.f.firstName.value;this.mName=this.f.middleName.value;
        this.lName=this.f.lastName.value;this.phone=this.f.phoneNumber.value;
        this.age=this.f.custAge.value;this.hospId=this.f.hospitalId.value;
        this.registrationForm.setValue(
          {
            firstName:this.fName,
            middleName:this.mName,
            lastName:this.lName,
            phoneNumber:this.phone,
            customerCardNo:this.card_Number,
            custAge:this.age,
            hospitalId:this.hospId
          }
      );

      });
    } 

setHospitalId():number{
  this.hospitalId=2;
  return this.hospitalId;
}
 

getCardNumberStatus(){
  this.autoGenerate=true;
  return this.autoGenerate;
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

onSubmit() {
    if(this.registrationForm.valid){

      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      

      // alert(JSON.stringify(this.registrationForm.value))
      this.hospitalId=1
      this.dataService.postRegisterInfo(this.registrationForm.value)
        .subscribe((result:any)=>{
          this.customerInfo=result;
          alert(JSON.stringify(this.customerInfo))
        });

        this.alert="Registration is Successful !!!";
        this.openModal(modal,btn);
    }
  }

}
