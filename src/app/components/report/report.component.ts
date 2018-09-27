import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportData } from "../../ReportData";
import { report } from "../../report";
import { DataService } from "../../services/data.service";
import { min } from 'rxjs/operators';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportForm:FormGroup;
  displayer:boolean;
  myDate:Date;
  sDate:string;
  eDate:string;
  reportDate:any={};
  new:any;
  dailyReportData:ReportData[];
  constructor(private formBuilder:FormBuilder,private dataService:DataService) { }

  ngOnInit() {

    this.reportForm = this.formBuilder.group({
      appointmentCreatedDate: ['', Validators.required],
      hospitalsId:[],
      startPoint:[],
      maxResult:[]

    });

    this.displayer=true;
  }

  get f(){
    return this.reportForm.controls;
  }
  onSubmit(){
    
    // alert(JSON.stringify(this.reportForm.value));
    this.myDate=this.f.appointmentCreatedDate.value;
    this.sDate=this.myDate.toString();
    this.eDate=this.myDate.toString();

    this.sDate=this.sDate+" "+"00:00:00";
    this.eDate=this.eDate+" "+"24:00:00";
    this.reportDate.startDate=this.sDate;
    this.reportDate.endDate=this.eDate;
    
    // alert(JSON.stringify(this.reportDate));
    this.dataService.getReportData(this.reportDate)
      .subscribe(res=>{
        // alert(JSON.stringify(res));
        this.dailyReportData=res;
        this.displayer=false;
        document.getElementById("mySidenav").style.marginLeft = "-250px";
        document.getElementById("main").style.marginLeft= "0";
        
      });
      
   
  }

  print(){
    var printButton=document.getElementById("printButton");
    printButton.style.visibility='hidden';
    window.focus();
    window.print();
    window.close();
    printButton.style.visibility='visible';
    
  }


}
