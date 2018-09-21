import { Component, OnInit ,Input} from '@angular/core';
import { DataSharingService } from "../../services/data-sharing.service";
import { DataService } from "../../services/data.service";
import { Customer } from "../../Customer";
import { Router } from '@angular/router';
import { Status } from "../../Status";
import { Department } from "../../Department";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  appointmentForm: FormGroup;
  customer: Customer;
  appDate:Date;
  customerId:number;statusId:any;
  statusList:Status[];
  departmentList:Department[];
  isClicked=false;
  id:number;

  constructor(private router: Router,private formBuilder: FormBuilder,private dataService: DataService ,private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.getCustomerInfo();
    this.getDepartments();
    this.getStatus();
    this.appointmentForm = this.formBuilder.group({
      appointmentDate: ['', Validators.required],
      statusId: ['', Validators.required],
      medicDeptId:['',Validators.required],
      customerId: [this.customer.id,Validators.required],
      cardNumber:[this.customer.customerCardNo,Validators.required],
      updater:[1,Validators.required],
      creator:[1,Validators.required],
      hospitalId:[this.customer.hospitalId,Validators.required],
      appointmetStatus:[true,Validators.required]

    });
  }

  openModal(modal){

    // When the user clicks the button, open the modal 
  modal.style.display = "block";
  }

  get f(){
    return this.appointmentForm.controls;
  }
  sendSMS(){
    this.isClicked=true;
    this.dataService.postAppointmentInfo(this.appointmentForm.value)
      .subscribe(res=>{
          alert(JSON.stringify(res));
      });
      this.dataSharingService.shareAppointmentInfo(this.appointmentForm.value); 

      this.goBack();
      

  }

  goBack(){
    // Get the modal 
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  getDepartments(){
    this.id=this.customer.hospitalId;
    this.dataService.getDepartmentList(this.id).subscribe((result:Department[])=>{
      this.departmentList=result;
    });
  }
  getCustomerInfo(){
    this.dataSharingService.getCustomerInfo().subscribe(result=>{
      this.customer=result
    });
  }
  getStatus(): void {
    this.id=this.customer.hospitalId;
    this.dataService.getStatusList(this.id).subscribe((result:Status[])=>{
      this.statusList=result
    });
  }

  submit(){
    if(this.appointmentForm.valid){
      this.appDate=this.f.appointmentDate.value;
      
      // alert(JSON.stringify(this.statusId));
      // Get the modal
     var modal = document.getElementById('myModal');

     // Get the button that opens the modal
     var btn = document.getElementById("myBtn");
    //  open the modal
     this.openModal(modal);

     
    
    }

  }

  // shareAppointmentInfo(){

  //   this.dataSharingService.sendAppointmentInfo();
  // }


}
