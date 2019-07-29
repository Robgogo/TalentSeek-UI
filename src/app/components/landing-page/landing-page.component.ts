import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";
import { AuthenticationService } from '../../Auth/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  talentList: any=[];
  constructor(private router: Router,
    private dataService:DataService,
    private authenticationService: AuthenticationService,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.getTalentList();
  }

  getTalentList(){
    this.dataService.getTalentList().subscribe(result=>{
      this.talentList=result;
    });
  
  }
  
  login(){
    this.router.navigateByUrl('login');
  }

  viewProfile(talent:any){
    this.dataSharingService.getProfile(talent);
    this.router.navigateByUrl('profile');
  }

}
