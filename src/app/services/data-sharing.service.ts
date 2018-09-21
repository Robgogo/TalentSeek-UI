import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,of } from 'rxjs';

import { Customer } from "../Customer";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private customerInfo: any;
  private appointmentInfo: any;

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

  deleteAppointment(deleteInfo:any){
    this.appointmentInfo=deleteInfo;
  }

  sendAppointmentInfo(appointmentInfo:any){
    this.appointmentInfo=appointmentInfo;
  }

  getAppointmentInfo():Observable<any>{
    return of(this.appointmentInfo);
  }

  shareHospitalId(id:number){
    var hospitalId=id;
    return hospitalId;
  }
  shareAppointmentInfo(appointmentInfo:any){
    this.appointmentInfo=appointmentInfo
    return of(this.appointmentInfo);
  }
  
}
