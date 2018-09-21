import { Component, OnInit } from '@angular/core';
declare var $: any;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  Form:FormGroup;
  newForm:FormGroup;
  appDate:Date;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    // this.dateTimePicker();
    this.Form = this.formBuilder.group({
      appointmentDate: ['', Validators.required]
    });

    this.newForm = this.formBuilder.group({
      myDate: [this.appDate, Validators.required]
    });

  }

  get f(){
    return this.Form.controls;
  }
  submit(){
    this.appDate=this.f.appointmentDate.value;


  }

   
}
