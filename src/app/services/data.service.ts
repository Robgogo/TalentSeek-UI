import { Injectable } from '@angular/core';
import { Customer } from '../Customer';
import { cardNumber } from "../CardNumber";
import { Status } from '../Status';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrlService } from './base-url.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private baseUrl: BaseUrlService,private http: HttpClient) { }

  baseurlRegisterCustomer= this.baseUrl.baseUrl + "register/customer";
  baseurlGetCUstomers=this.baseUrl.baseUrl+ "cardNUmberGenerateEndPoint/hospitalPreFix";
  baseurlCardNumber= this.baseUrl.baseUrl + "register/customer";
  baseurlGetStatus=this.baseUrl.baseUrl+ "get/statuslist";
  statusUrl="http://localhost:3000/api/status";
  baseurlGetSingleCustomerInfo=this.baseUrl.baseUrl+ "";
  baseurlUpdateCustomer= this.baseUrl.baseUrl + "customer/update";
  customerURL="http://localhost:3000/api/customer";
  customersURL="http://localhost:3000/api/customers";
  appointmentURL="http://localhost:3000/api/appointmentInfo";
  registerURL="http://localhost:3000/api/register";
  cardURL="http://localhost:3000/api/cardNumber";

  getCustomer():Observable<any>{ 
    return this.http.get(this.customerURL);
  }

  getStatusList(){
    return this.http.get(this.baseurlGetStatus);
  }

  getCardNumber(){
    return this.http.get(this.cardURL);
  }
  getStatus(){
    return this.http.get(this.statusUrl);
  }
  getCustomerList(){ 
    return this.http.get(this.customersURL);
  }

  updateRegisterInfo(info:any){
    return this.http.post<any>(this.baseurlUpdateCustomer,JSON.stringify(info),httpOptions);
  }
  getAppointmentInfo(){ 
    return this.http.get(this.appointmentURL);
  }

  postRegisterInfo(info:any){
    return this.http.post<any>(this.baseurlRegisterCustomer,JSON.stringify(info),httpOptions);
  }

}
