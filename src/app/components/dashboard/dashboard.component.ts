import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from "../../services/data.service";
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../Auth/authentication.service';
import { DataSharingService } from "../../services/data-sharing.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInfo:any={};
  constructor(private dataSharing: DataSharingService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dataService:DataService,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.userInfo = this.dataSharingService.getUserInfo();
    // alert(JSON.stringify(this.userInfo));
  }
 
  addPortfolio(){
    this.router.navigateByUrl('portfolio')
  }
  view(){
    this.router.navigateByUrl('portfolioList')
  }

  addEducation(){
    this.router.navigateByUrl('educationandexperience');
  }

  addBio(){
    this.router.navigateByUrl('bio')
  }

  

}
