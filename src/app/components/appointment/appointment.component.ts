import { Component, OnInit ,Input} from '@angular/core';
import { DataSharingService } from "../../services/data-sharing.service";
import { DataService } from "../../services/data.service";
import { Customer } from "../../Customer";
import { Status } from "../../Status";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  customer: Customer;
  statusList:Status[];
  id:number;
  constructor(private dataService: DataService ,private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.getCustomerInfo();
    this.getStatus();
  }

  getCustomerInfo(){
    this.dataSharingService.getCustomerInfo().subscribe(result=>{
      this.customer=result
    });
  }
  getStatus(): void {
    // this.id=this.customer.id;
    this.dataService.getStatusList().subscribe((result:Status[])=>{
      this.statusList=result
    });
  }

}
