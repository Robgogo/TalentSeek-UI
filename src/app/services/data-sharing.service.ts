import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,of } from 'rxjs';

import { Customer } from "../Customer";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private info: any={};
  public id: any;
  private token:any;
  private temp:any;
  private userInfo:any={};
  private message:string;
  private talent:any={};
  private appointmentInfo: any;
  public hospitalInfo: any;
  private talentList:any=[];
  public internetConnected = true;

  public loggedInSource = new BehaviorSubject(localStorage.getItem('staff') != null);
  public loggedIn$ = this.loggedInSource.asObservable();

  constructor() { }


  sendInfo(info:any){
    this.info=info;
  }

  getInfo(){
    return this.info;
  }

  sendUser(info:any){
    this.userInfo = info;
  }

  getUserInfo():Observable<any>{
    return of(this.userInfo);
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
  sendMessage(message:string){
    this.message = message;
  }
  returnMessage(){
    return this.message;
  }

  tempo(info:any){
    this.temp= info;
  }
  sendTemp(){
    return this.temp;
  }
  sendResult(list:any){
    this.talentList=list;
  }

  getesult(){
    return this.talentList;
  }
  
  getProfile(talent:any){
    this.talent = talent;
  }

  recieveTalent(){
    return this.talent;
  }
  
}
