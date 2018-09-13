import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarOpened = true;

  constructor() { }

  ngOnInit() {
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

}
