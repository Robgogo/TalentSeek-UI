import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../Auth/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) {}

  ngOnInit() {
      const message = this.route.snapshot.paramMap.get('message');
      this.error = message;
      this.loginForm = this.formBuilder.group({
          User_Name: ['', Validators.required],
          Password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.authenticationService.login(this.f.User_Name.value, this.f.Password.value)
          .pipe(first())
          .subscribe(
              data => {
                  if(this.returnUrl.length > 1){
                    this.router.navigate([this.returnUrl]);
                    
                  }
                  else{
                      this.router.navigate(['/get/customerlist']);
                      
                  }
              },
              error => {
                  this.error = error;
              });
  }
  
}
