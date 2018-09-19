import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(
        private http: HttpClient, 
        private router: Router) { }

    login(User_Name: string, Password: string) {
        return this.http.post<any>('https://192.168.1.169:8443/distribution-ejb/rest/auth', { username: User_Name, password: Password })
            .pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    localStorage.setItem('currentUser', res.token);
                }
                else {
                    this.router.navigate(['/login/' + res.message]);
                }
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        
    }
    isLoggedIn(){
        if(localStorage.getItem('currentUser')){
            return true;
        }
        else return false;
    }

}