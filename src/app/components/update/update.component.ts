import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { ActivatedRoute } from '@angular/router';
import { Customer } from "../../Customer";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:number;
  updatedInfo:any;
  message:string;
  isClicked=false;
  autoGenerate:boolean;
  info:Customer = new Customer();
  registrationForm: FormGroup;
  
  constructor(private router : Router,private dataService : DataService,private dataSharingService: DataSharingService,private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getInfo();
    // alert(this.info.firstName);
    this.registrationForm = this.formBuilder.group({
      id:[this.info.id, Validators.required],
      firstName: [this.info.firstName, Validators.required],
      middleName: [this.info.middleName, Validators.required],
      lastName: [this.info.lastName, Validators.required],
      phoneNumber: [this.info.phoneNumber ,[Validators.required, Validators.pattern("^[0][0,1,2,3,4,5,6,7,8,9]{9}$")]],
      customerCardNo: [this.info.customerCardNo, Validators.required],
      custAge: [this.info.custAge, Validators.required]
      // hospitalAdmin: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required],
    });
  }
  
  getInfo(){
    this.dataSharingService.getCustomerInfo()
    .subscribe((res : Customer)=> {
          this.info = res
        }
      );
  }
  getCardNumberStatus(){
    this.autoGenerate=false;
    return this.autoGenerate;
  }
  IsClicked(){
    this.isClicked=true;
  }
  onSubmit(){
    if(this.registrationForm.valid){
      // this.adminService.registerHospital(this.registrationForm.value)
      // alert(JSON.stringify(this.registrationForm.value))

      this.dataService.updateCustomerInfo(this.registrationForm.value)
        .subscribe((result:any)=>{
          this.updatedInfo=result;
        });
       
      // this.router.navigateByUrl('get/customerlist');
    }
  }

}


