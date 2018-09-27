import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,of } from 'rxjs';

import { Customer } from "../Customer";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private customerInfo: any;
  private appointmentInfo: any;
  public hospitalInfo: any;
  public internetConnected = true;

  public loggedInSource = new BehaviorSubject(localStorage.getItem('staff') != null);
  public loggedIn$ = this.loggedInSource.asObservable();

  constructor() { }


  sendInfo(info:any){
    this.customerInfo=info;
  }

  getCustomerInfo():Observable<any>{
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
