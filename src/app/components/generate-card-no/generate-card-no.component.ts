import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../services/customer.service";
import { DataService } from "../../services/data.service";
import { Customer } from "../../Customer";

@Component({
  selector: 'app-generate-card-no',
  templateUrl: './generate-card-no.component.html',
  styleUrls: ['./generate-card-no.component.css']
})
export class GenerateCardNoComponent implements OnInit {
  customerInfo: any = {};
  customers: Customer[];
  
  data= [ 
          {
            "First_Name": "Terbinos",
            "Middle_Name":"Getachew", 
            "Last_Name":"Chekol",
            "Phone_Number":"+251910576969" 
          }
        ]
  constructor(private customerService:CustomerService,private dataService: DataService) { }

  ngOnInit() {
    // this.customerInfo=this.data;
    // alert(JSON.stringify( this.customerInfo));
    // this.getcustomers();
  }

  // getcustomers(): void {
  //   this.dataService.getCustomers()
  //     .subscribe(customers=>this.customers=customers);
  // }

}
