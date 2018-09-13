import { Component, Output, OnInit, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { Customer } from "../../Customer";
import { cardNumber } from "../../CardNumber";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrationForm: FormGroup;
  customerInfo:Customer;
  num:number;
  hospitalId:number;
  id:number;
  card:cardNumber = new cardNumber();
  card_Number:string;
  autoGenerate:boolean;
  constructor(private router: Router,private formBuilder: FormBuilder,private dataService:DataService) { }

  ngOnInit() {
    this.getCardNumberStatus();
    this.generate();
    alert( JSON.stringify(this.card));
    this.registrationForm = this.formBuilder.group({
      First_Name: ['', Validators.required],
      Middle_Name: ['', Validators.required],
      Last_Name: ['', Validators.required],
      Phone_Number: ['' ,[Validators.required, Validators.pattern("^[0][0,1,2,3,4,5,6,7,8,9]{9}$")]],
      Information: ['', Validators.required],
      Card_Number: ['', Validators.required],
      Age: [this.card.generated, Validators.required]
    });
  
    
  }

  generate(){
    this.dataService.getCardNumber()
    .subscribe((result:cardNumber)=>{
      this.card=result;
      
    });
  }  

setHospitalId(){
  this.hospitalId=1;
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
  this.router.navigateByUrl('register/appointment/1');
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

      this.openModal(modal,btn);

      // alert(JSON.stringify(this.registrationForm.value))

      this.dataService.postRegisterInfo(this.registrationForm.value)
        .subscribe((result:any)=>{
          this.customerInfo=result;
        });
      this.id=this.customerInfo.Id; 
      this.router.navigateByUrl('/appointment/'+this.id);
    }
  }

}
