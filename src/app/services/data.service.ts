import { Injectable } from '@angular/core';
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

  baseurlRegisterCustomer= this.baseUrl.baseUrl + "registerStaff/customers";
  baseurlRegisterAppointment= this.baseUrl.baseUrl + "registerStaff/appointment";
  baseurlGetCardNumber=this.baseUrl.baseUrl+ "cardNUmberGenerate/CareNumberGenerater";
  baseurlGetCustomersList= this.baseUrl.baseUrl + "getStaff/customerslist";
  baseurlisAutoGenerate= this.baseUrl.baseUrl + "getStaff/getAutoStatus";
  baseurlGetStatus=this.baseUrl.baseUrl+ "getStaff/statuslist";
  baseurlGetReportData=this.baseUrl.baseUrl+"appointmentReport/dailyAppointmentList";
  baseurlGetDepartment=this.baseUrl.baseUrl+ "getStaff/MedicalDepartments";
  baseurlGetAppointments=this.baseUrl.baseUrl+ "getStaff/Appointmentlist";
  baseurlUpdateAppointmentDate=this.baseUrl.baseUrl+"postStaff/updateAppointmentDate";
  baseurlCancelAppointmentDate=this.baseUrl.baseUrl+"postStaff/deleteAppointment";
  baseurlGetSingleCustomerInfo=this.baseUrl.baseUrl+ "";
  baseurlUpdateCustomer= this.baseUrl.baseUrl + "postStaff/updateCustomers";
  baseurlCheckCredentials= this.baseUrl.baseUrl+ "";
  baseurlGetCurrentUser=this.baseUrl.baseUrl+ "users/me";
  

  // Endpoint Url

  getCurrentUser(){
    return this.http.get(this.baseurlGetCurrentUser);
  }
  getAppointmentList(){
    return this.http.get(this.baseurlGetAppointments);
  }

  updateAppointmentInfo(info:any){
    return this.http.post<any>(this.baseurlUpdateAppointmentDate,JSON.stringify(info),httpOptions);
  }
  getStatusList(){
    return this.http.get(this.baseurlGetStatus);
  }
  isAutoGenerate(){
    return this.http.get(this.baseurlisAutoGenerate);
  }
  
  getCardNumber():Observable<any>{
    return this.http.get<any>(this.baseurlGetCardNumber);
  }

  checkCredintial(info:any){
    return this.http.post<any>(this.baseurlUpdateAppointmentDate,JSON.stringify(info),httpOptions);
  }

  cancelAppointment(info:any){
    return this.http.post<any>(this.baseurlCancelAppointmentDate,JSON.stringify(info),httpOptions);
  }

  getDepartmentList():Observable<any>{
    return this.http.get<any>(this.baseurlGetDepartment);
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

  getReportData(info:any){
    return this.http.post<any>(this.baseurlGetReportData,JSON.stringify(info),httpOptions);
  }

}
