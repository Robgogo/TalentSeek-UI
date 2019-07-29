import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";
import { AuthenticationService } from '../../Auth/authentication.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnDestroy,OnInit {
  dtOptions: DataTables.Settings = {};
  portfolioList: any=[];
  dtTrigger: Subject<any> = new Subject();
  id:any;
  constructor(private router :Router,
    private dataService:DataService,
    private authenticationService: AuthenticationService,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
      // pageLength: 2  

    };

    this.dataService.getPortfolioList(localStorage.getItem('id')).subscribe(result=>{
      this.portfolioList=result;
      this.dtTrigger.next();
    });
    // alert(localStorage.getItem('id'))
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  editPortfolio(portfolio:any){
    this.dataSharingService.sendInfo(portfolio);
    this.router.navigateByUrl('updatePortfolio');
  }

  deletePorfolio(portfolio:any){
    this.dataService.deletePortfolio(portfolio);
    this.router.navigateByUrl('portfoliolist');
  }

}
