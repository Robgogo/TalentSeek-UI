import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../../services/data.service";
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";
import {  DataSharingService } from "../../services/data-sharing.service";
@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  info:any;
  updateForm: FormGroup;
  id:number;
  today:string;
  myDate:Date;
  latestDate:string;
  isClicked:boolean;
  appointmentInfo:any;
  constructor(private router:Router,private datepipe: DatePipe,private dataService:DataService,private dataSharingService: DataSharingService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAppointmentInfo();
    // this.latestDate=this.info.appointmentDate;
    this.latestDate =this.datepipe.transform(this.info.appointmentDate, 'yyyy-MM-ddTHH:mm');
    // alert(this.latestDate);
    this.updateForm = this.formBuilder.group({
      appointmentDate: [this.latestDate, Validators.required],
      id:[this.info.id,Validators.required]
    });

      // new Date().getTime() + 12 * 60 * 60 * 1000
      this.myDate=new Date();
      // this.myDate.setDate(this.myDate.getDate()+1);
      this.today=this.datepipe.transform(this.myDate, 'yyyy-MM-ddTHH:mm'); //whatever format you need. 
  }

  getAppointmentInfo(){
    this.dataSharingService.getAppointmentInfo()
      .subscribe(res=>{
        this.info=res;
        // alert(JSON.stringify(this.info));
      })
  }

  IsClicked(){
    this.isClicked=true;
  }
  
  goBack(){
    this.router.navigateByUrl('AppointmentList');
  }
  onSubmit(){
    if(this.updateForm.valid){
      // this.adminService.registerHospital(this.registrationForm.value)
      // alert(JSON.stringify(this.registrationForm.value))
      this.getAppointmentInfo()
      this.dataService.updateAppointmentInfo(this.updateForm.value)
        .subscribe((result:any)=>{
          this.appointmentInfo=result;
        });
       
      // this.router.navigateByUrl('get/customerlist');
    }
  }


}
