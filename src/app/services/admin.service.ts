import { Injectable } from '@angular/core';
import { of, Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrlService } from "./base-url.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private urlService: BaseUrlService,
    private http: HttpClient) { }

  
    
    

  public resetPassword(resetInfo): Observable<any> { // change password
    return this.http.post(
      `${this.urlService.baseUrl}resetPassword`,
      resetInfo, 
      this.httpOptions
    )
  }

  public forgotPassword(forgotPasswordInfo): Observable<any> { // reset password via email
    return this.http.post(
      `${this.urlService.baseUrl}forgotPassword`,
      forgotPasswordInfo, 
      this.httpOptions
    )
  }

  
  

}
