import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";
import {  PasswordValidation } from "../../classes/PasswordValidation";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  bioForm: FormGroup;
  userData:any={};
  constructor(private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dataService:DataService,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.bioForm = this.formBuilder.group({
      skill: ['', Validators.required],
      yearOfExp:['',Validators.required],
      interest: ['', Validators.required],
      aboutMe: ['', Validators.required]

    });
  }
  get f(){
    return this.bioForm.controls;
  }
  showSuccess(message:string) {
    this.toastr.success(message);
  }

  errorSuccess(message:string) {
    this.toastr.error(message);
  }

  goBack(){
    this.router.navigateByUrl('dashboard');
  }
  onSubmit(){
    if(this.bioForm.valid){
      this.userData.id=localStorage.getItem('id');
      this.userData.skill=this.f.skill.value;
      this.userData.yearOfExp = this.f.yearOfExp.value;
      this.userData.interest=this.f.interest.value;
      this.userData.aboutMe=this.f.aboutMe.value;
      alert(JSON.stringify(this.userData));
      this.dataService.postBioInfo(this.userData)
      .subscribe((result:any)=>{
        if(result.message == "Successful"){
          this.showSuccess("Information Successfully recorded !");
          this.router.navigateByUrl('dashboard');
        }
        else{
          this.errorSuccess("Information is not recorded !");
          this.router.navigateByUrl('dashboard');
        }
      });
  }
  }
}
