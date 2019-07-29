import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DataSharingService } from './../services/data-sharing.service';
import { DataService } from '../services/data.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    isChanged:any={};
    userInfo:any={};
    id:any;
    name:string;
    constructor(
        private http: HttpClient,
        private dataSharingService : DataSharingService,
        private dataService: DataService, 
        private router: Router) { }

    login(email: string, password: string) {
        return this.http.post<any>('http://talentseek.herokuapp.com/users/login', {
                email: email, 
                password: password
             }).pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                this.id=res.user.user._id;
                this.userInfo = res.user.user;
                this.dataSharingService.sendUser(this.userInfo);
                
                if (res && res.token && res.user.user.isTalent) {
                    localStorage.setItem('user', res.token);
                    localStorage.setItem('id',this.id);
                    localStorage.setItem('firstname',res.user.user.firstname);
                    localStorage.setItem('lastname',res.user.user.lastname);
                    this.isLoggedIn();
                    this.router.navigate(['/viewProfile']);  
                }
                else if(res && res.token){
                    localStorage.setItem('user', res.token);
                    localStorage.setItem('id',this.id);
                    localStorage.setItem('firstname',res.user.user.firstname);
                    localStorage.setItem('lastname',res.user.user.lastname);
                    this.isLoggedIn();
                    this.router.navigate(['/dashboard']); 
                }
                else {
                    this.router.navigate(['/login/' + res.message]);
                }
            }));
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        this.dataSharingService.loggedInSource.next(false)

    }
    isLoggedIn(){
        if(localStorage.getItem('user')){
            return true;
        }
        else return false;
    }

}