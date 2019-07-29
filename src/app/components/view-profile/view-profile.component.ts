import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  selected = 0;
  hovered = 0;
  currentRate:number;
  readonly = false;
  constructor() { }

  ngOnInit() {
    this.currentRate = 2;
  }

}
