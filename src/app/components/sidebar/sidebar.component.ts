import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Auth/authentication.service';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  searchForm: FormGroup;
  sidebarOpened = true;
  firstTime = true;
  loggedIn;
  user:any;
  temp:boolean;
  message:string;
  CurrentUser:string;
  currentUser:any={};
  hospitalName:string;
  hospital:any={};
  talentList: any=[];
  logger:boolean;
  constructor(  private dataSharing: DataSharingService,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private dataService: DataService,
    private router: Router) {
      this.loggedIn = this.authService.isLoggedIn()
     }

     ngOnInit() {
      this.user = localStorage.getItem('firstname');
      this.searchForm = this.formBuilder.group({
        query: ['', Validators.required],
      });
      this.checker();
      this.dataSharing.loggedIn$.subscribe(
        loginStatus => {
          this.loggedIn = loginStatus;
          this.updateSideBar()
          this.openNav();
        }
      );
      // alert(JSON.stringify(this.logger));
    }
    get f(){
      return this.searchForm.controls;
    } 
  
  
    updateSideBar() {
      if (localStorage.getItem('user')) {
        this.CurrentUser = localStorage.getItem('firstname')
        this.openNav()
      } else {
        this.closeNav()
      }
    }


    checker(){
      if(localStorage.getItem('user')){
        this.logger=true;
        this.openNav();
      }

      else{
        this.logger=false;
      }
    }

    search(){
      this.router.navigateByUrl('searchResult');
      if(this.searchForm.valid){
        this.dataService.getQuery(this.f.query)
        .subscribe((result:any)=>{
          if(result.message == "Successful"){
            this.talentList = result.result;
            this.dataSharing.sendResult(this.talentList);
            this.router.navigateByUrl('searchResult');
          }
          else{
            this.message = "No results found";
            this.dataSharing.sendMessage(this.message);
            this.router.navigateByUrl('searchResult');
          }
        
      });
      
      }

    }

    login(){

      this.router.navigateByUrl('login');
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
