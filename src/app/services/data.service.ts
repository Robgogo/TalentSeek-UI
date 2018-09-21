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

  baseurlRegisterCustomer= this.baseUrl.baseUrl + "register/customers";
  baseurlRegisterAppointment= this.baseUrl.baseUrl + "register/appointment";
  baseurlGetCardNumber=this.baseUrl.baseUrl+ "cardNUmberGenerateEndPoint/CareNumberGenerater";
  baseurlGetCustomersList= this.baseUrl.baseUrl + "get/customerslist";
  baseurlGetStatus=this.baseUrl.baseUrl+ "get/statuslist";
  baseurlGetDepartment=this.baseUrl.baseUrl+ "get/MedicalDepartments";
  baseurlGetAppointments=this.baseUrl.baseUrl+ "get/Appointmentlist";
  baseurlUpdateAppointmentDate=this.baseUrl.baseUrl+"post/updateAppointmentDate";
  baseurlCancelAppointmentDate=this.baseUrl.baseUrl+"post/deleteAppointment";
  baseurlGetSingleCustomerInfo=this.baseUrl.baseUrl+ "";
  baseurlUpdateCustomer= this.baseUrl.baseUrl + "post/updateCustomers";
  // statusUrl="http://localhost:3000/api/status";
  // customerURL="http://localhost:3000/api/customer";
  // customersURL="http://localhost:3000/api/customers";
  // appointmentURL="http://localhost:3000/api/appointmentInfo";
  // registerURL="http://localhost:3000/api/register";
  // cardURL="http://localhost:3000/api/cardNumber";

  // getCustomer():Observable<any>{ 
  //   return this.http.get(this.customerURL);
  // }

  // getStatus(){
  //   return this.http.get(this.statusUrl);
  // }

  // getAppointmentInfo(){ 
  //   return this.http.get(this.appointmentURL);
  // }

  // getCustomerList(){ 
  //   return this.http.get(this.customersURL);
  // }

  // getCardNumberInfo(id:number):Observable<any>{
  //   return this.http.get<any>(this.cardURL);
  // }

  // Endpoint Url
  getAppointmentList(id:number){
    return this.http.get(this.baseurlGetAppointments+"?id="+id);
  }

  updateAppointmentInfo(info:any){
    return this.http.post<any>(this.baseurlUpdateAppointmentDate,JSON.stringify(info),httpOptions);
  }
  getStatusList(id:number){
    return this.http.get(this.baseurlGetStatus+"?id="+id);
  }
  
  getCardNumber(id:number):Observable<any>{
    return this.http.get<any>(this.baseurlGetCardNumber+"?id="+id);
  }

  cancelAppointment(info:any){
    return this.http.post<any>(this.baseurlCancelAppointmentDate,JSON.stringify(info),httpOptions);
  }

  getDepartmentList(id:number):Observable<any>{
    return this.http.get<any>(this.baseurlGetDepartment+"?id="+id);
  }

  getCustomersList(){ 
    return this.http.get(this.baseurlGetCustomersList);
  }

  updateCustomerInfo(info:any){
    return this.http.post<any>(this.baseurlUpdateCustomer,JSON.stringify(info),httpOptions);
  }
  postAppointmentInfo(info:any){
    return this.http.post<any>(this.baseurlRegisterAppointment,JSON.stringify(info),httpOptions);
  }
  postRegisterInfo(info:any){
    return this.http.post<any>(this.baseurlRegisterCustomer,JSON.stringify(info),httpOptions);
  }

}
