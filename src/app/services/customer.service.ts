import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from "@angular/common/http";
import { Http, Response } from "@angular/http";
import { Observable, of ,throwError, pipe } from "rxjs";
import { map,filter,catchError, mergeMap  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public apiURL:string="http://localhost:3001/api/content";
  constructor(private httpClient: HttpClient) { }

  RegisterUser(user:any){
    return this.httpClient.post(this.apiURL,user)
    .pipe(
      map(res=>res),
        catchError(this.errorHandler)
    );
  }

  errorHandler(error: Response){
    console.log(error);
    return throwError(error);
  }

  getCustomerData(data:any){
    return this.httpClient.get(data,{responseType: 'json'});
  }
}
