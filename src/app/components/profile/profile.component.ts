import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from "../../services/data-sharing.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  talent:any={};
  constructor(private router:Router,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.getTalent();
  }

  getTalent(){
    this.talent = this.dataSharingService.recieveTalent();
  }

  index(){
    this.router.navigateByUrl('index')
  }
  login(){
    this.router.navigateByUrl('login');
  }
}
