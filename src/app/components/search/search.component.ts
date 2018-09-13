import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { Customer } from "../../Customer";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  id:number;
  customerList: any=[];
  dtTrigger: Subject<any> = new Subject();
  constructor(private router :Router,private dataService:DataService,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
      // pageLength: 2
    };

    this.dataService.getCustomerList().subscribe(result=>{
      this.customerList=result;
      this.dtTrigger.next();
    });
    
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  editCustomerInfo(customer:any){
    this.id=customer.id;
    this.dataSharingService.sendInfo(customer);
    this.router.navigateByUrl('customer/updateCustomers/'+this.id);
  }

  appointment(customer:any){
    this.id=customer.id;
    this.dataSharingService.sendInfo(customer);
    this.router.navigateByUrl('register/appointment/'+this.id);
  }

}
