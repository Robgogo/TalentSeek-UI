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
  id:any;
  baseurlRegisterUser= this.baseUrl.baseUrl + "users/signup";
  baseurlisPasswordChanged= this.baseUrl.baseUrl+ "getStaff/isPasswordChanged";
  baseurllogger = this.baseUrl.baseUrl + "users/login";
  baseurlGetDifferentietor = this.baseUrl.baseUrl + "users/";
  baseurlEdExUser = this.baseUrl.baseUrl + "resource/edex";
  baseurlBio = this.baseUrl.baseUrl + "resource/bio";
  baseurlPortfolio = this.baseUrl.baseUrl + "resource/portfolio";
  baseurlGetCurrentBio = this.baseUrl.baseUrl + "resource/bio";
  baseurlGetCurrentEdEx = this.baseUrl.baseUrl + "resource/edex";
  baseurlGetCurrentPortfolio =this.baseUrl.baseUrl + "resource/portofolio";
  baseurlGetPortfolioList = this.baseUrl.baseUrl + "resource/portfolio";
  baseurlUpdatePortfolioList = this.baseUrl.baseUrl + "resource/portfolio/edit";
  baseurlGetTalentList = this.baseUrl.baseUrl + "users/latest";
  baseurlGetTalentProfile = this.baseUrl.baseUrl + "resource/talent";
  baseurlGetSearchResult =  this.baseUrl.baseUrl + "/users/search";
  baseurlDeletePortfolioList = this.baseUrl.baseUrl + "resource/deletePortfolio";
  // Get HTTP
  isPasswordChanged(){
    return this.http.get(this.baseurlisPasswordChanged);
  }

  getPortfolioList(id:any){ 
    return this.http.get(this.baseurlGetPortfolioList+"/"+id);
  }

  getTalentList(){ 
    return this.http.get(this.baseurlGetTalentList);
  }

  getProfile(id:any){
    return this.http.get(this.baseurlGetTalentProfile +"/"+id);
  }

  getCurrentBio(id:any){
    return this.http.get(this.baseurlGetCurrentBio +"/"+id);
  }

  getCurrentPortfolio(id:any){
    return this.http.get(this.baseurlGetCurrentPortfolio +"/"+id);
  }

  getCurrentEdEx(id:any){
    return this.http.get(this.baseurlGetCurrentEdEx +"/"+id);
  }

  logger(info:any){
    return this.http.post<any>(this.baseurllogger,JSON.stringify(info),httpOptions);
  }

  // Post HTTP
  postRegisterInfo(info:any){
    return this.http.post<any>(this.baseurlRegisterUser,JSON.stringify(info),httpOptions);
  }
  postEdExInfo(info:any){
    return this.http.post<any>(this.baseurlEdExUser,JSON.stringify(info),httpOptions);
  }

  postPortfolioInfo(info:any){
    return this.http.post<any>(this.baseurlPortfolio,JSON.stringify(info),httpOptions);
  }

  postBioInfo(info:any){
    return this.http.post<any>(this.baseurlBio,JSON.stringify(info),httpOptions);
  }

  updatePortfolio(info:any){
    return this.http.post<any>(this.baseurlUpdatePortfolioList,JSON.stringify(info),httpOptions);
  }

  deletePortfolio(info:any){
    return this.http.post<any>(this.baseurlDeletePortfolioList,JSON.stringify(info),httpOptions);
  }

  getQuery(info:any){
    return this.http.post<any>(this.baseurlGetSearchResult,JSON.stringify(info),httpOptions);
  }

}
