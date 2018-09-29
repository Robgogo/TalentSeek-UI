import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Auth/authentication.service';
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { DataSharingService } from './../../services/data-sharing.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarOpened = true;
  firstTime = true;
  loggedIn;
  CurrentUser:string;
  currentUser:any={};

  constructor(  private dataSharing: DataSharingService,
    private authService: AuthenticationService,
    private dataService: DataService,
    private router: Router) {
      this.loggedIn = this.authService.isLoggedIn()
     }

  ngOnInit() {
    this.dataService.getCurrentUser()
      .subscribe(res=>{
      this.currentUser=res;
      this.CurrentUser=this.currentUser.username;
    });
    this.dataSharing.loggedIn$.subscribe(
      loginStatus => {
        this.loggedIn = loginStatus
        this.updateSideBar()
      }
    )
  }

  updateSideBar() {
    if (this.authService.isLoggedIn()) {
      this.openNav()
    } else {
      this.closeNav()
    }
  }


  openNav() {
    document.getElementById("mySidenav").style.marginLeft = "0px";
    document.getElementById("main").style.marginLeft = "250px";
    this.sidebarOpened = true;
  }

  closeNav() {
    document.getElementById("mySidenav").style.marginLeft = "-250px";
    document.getElementById("main").style.marginLeft= "0";
    this.sidebarOpened = false;
  }

  toggleNav() {
    if (this.sidebarOpened) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  
  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }

}
