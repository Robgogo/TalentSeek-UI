import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from "../../services/data.service";
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../Auth/authentication.service';
import { DataSharingService } from "../../services/data-sharing.service";

@Component({
  selector: 'app-updateportfolio',
  templateUrl: './updateportfolio.component.html',
  styleUrls: ['./updateportfolio.component.css']
})
export class UpdateportfolioComponent implements OnInit {
  portfolioForm: FormGroup;
  userData:any={};
  info:any={};
  constructor(private dataSharing: DataSharingService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dataService:DataService,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.getInfo();
    this.portfolioForm = this.formBuilder.group({
      projectTitle: [this.info.projectTitle, Validators.required],
      projectDescription: [this.info.projectDescription, Validators.required],
      link: [this.info.link]
    });
  }

  getInfo(){
    this.info = this.dataSharingService.getInfo();
  }

  get f(){
    return this.portfolioForm.controls;
  } 

  showSuccess(message:string) {
    this.toastr.success(message);
  }
  showError(message:string) {
    this.toastr.error(message);
  }

  onSubmit(){
    if(this.portfolioForm.valid){
      this.userData.id=this.info._id;
      this.userData.projectTitle=this.f.projectTitle.value;
      this.userData.projectDescription=this.f.projectDescription.value;
      this.userData.link=this.f.link.value;
      alert(JSON.stringify(this.userData));
      this.dataService.updatePortfolio(this.userData)
      .subscribe((result:any)=>{
        if(result.message == "Successful"){
          alert(JSON.stringify(result))
          this.showSuccess("Information Successfully updated !");
        this.router.navigateByUrl('portfolioList');
        }
        else{
          this.showError("Information is not updated !");
        }
          
      });
  }
  }
}
