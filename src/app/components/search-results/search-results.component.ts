import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  message:string;
  constructor(private dataService:DataService,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage(){
    this.message = this.dataSharingService.returnMessage();
  }

}
