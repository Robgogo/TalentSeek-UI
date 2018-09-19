import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,of } from 'rxjs';

import { Customer } from "../Customer";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private customerInfo: any;

  constructor() { }


  sendInfo(info:any){
    this.customerInfo=info;
  }
  sendCustomerInfo(customer:Customer){
    this.customerInfo=customer;
  }
  getCustomerInfo():Observable<Customer>{
    return of(this.customerInfo);
  }
  
}
