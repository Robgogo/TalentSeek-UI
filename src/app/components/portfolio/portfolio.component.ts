import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from "../../services/data.service";
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../Auth/authentication.service';
import { DataSharingService } from "../../services/data-sharing.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
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
    this.portfolioForm = this.formBuilder.group({
      projectTitle: ['', Validators.required],
      description: ['', Validators.required],
      link: ['']
    });
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

  goBack(){
    this.router.navigateByUrl('dashboard');
  }

  onSubmit() {
    if(this.portfolioForm.valid){
      this.userData.id=localStorage.getItem('id');
      // this.userData.id=this.dataSharingService.getInfo();
      this.userData.projectTitle=this.f.projectTitle.value;
      this.userData.description=this.f.description.value;
      this.userData.link=this.f.link.value;
      alert(JSON.stringify(this.userData));
      this.dataService.postPortfolioInfo(this.userData)
      .subscribe((result:any)=>{
        if(result.message == "Successful"){
          alert(JSON.stringify(result))
          this.showSuccess("Information Successfully recorded !");
        // this.router.navigateByUrl('login');
        }
        else{
          this.showError("Information is not recorded !");
        }
          
      });
    }
  }


}
