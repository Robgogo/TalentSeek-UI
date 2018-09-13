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
  info:Customer = new Customer();
  registrationForm: FormGroup
  
  constructor(private router : Router,private dataService : DataService,private dataSharingService: DataSharingService,private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getInfo();
    alert(this.info.Age);
    this.registrationForm = this.formBuilder.group({
      First_Name: [this.info.First_Name, Validators.required],
      Middle_Name: [this.info.Middle_Name, Validators.required],
      Last_Name: [this.info.Last_Name, Validators.required],
      Phone_Number: [this.info.Phone_Number ,[Validators.required, Validators.pattern("^[0][0,1,2,3,4,5,6,7,8,9]{9}$")]],
      Information: [this.info.First_Name, Validators.required],
      Card_Number: [this.info.Card_Number, Validators.required],
      Age: [this.info.Age, Validators.required]
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

  onSubmit(){
    if(this.registrationForm.valid){
      // this.adminService.registerHospital(this.registrationForm.value)
      // alert(JSON.stringify(this.registrationForm.value))

      this.dataService.updateRegisterInfo(this.registrationForm.value)
        .subscribe((result:any)=>{
          this.updatedInfo=result;
        });
      this.id=this.updatedInfo.Id; 
      this.router.navigateByUrl('/customer/stafflist'+this.id);
    }
  }

}


