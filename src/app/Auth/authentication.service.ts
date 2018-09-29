import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DataSharingService } from './../services/data-sharing.service';
import { BaseUrlService } from '../services/base-url.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private dataSharingService : DataSharingService,
        private urlService: BaseUrlService, 
        private router: Router) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://192.168.1.199:8080/uniMed_eCard/rest/auth/hospitalStaff', {
                username: username, 
                password: password
             }).pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    localStorage.setItem('staff', res.token);
                    this.dataSharingService.loggedInSource.next(true)
                }
                else {
                    this.router.navigate(['/login/' + res.message]);
                }
            }));
    }

    logout() {
        localStorage.removeItem('staff');
        this.dataSharingService.loggedInSource.next(false)
    }
    isLoggedIn(){
        if(localStorage.getItem('staff')){
            return true;
        }
        else return false;
    }

}