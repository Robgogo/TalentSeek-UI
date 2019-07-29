import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../Auth/authentication.service';
import { DataSharingService } from "../../services/data-sharing.service";
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
  temp:boolean;
  successMessage = '';
  constructor(private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private dataSharing: DataSharingService,
      private formBuilder: FormBuilder) {}

  ngOnInit() {
      const message = this.route.snapshot.paramMap.get('message');
      this.successMessage = this.route.snapshot.paramMap.get('successMessage');
      this.error = message;
      this.successMessage = this.route.snapshot.paramMap.get('successMessage');
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
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
        // alert(JSON.stringify(this.loginForm.value));
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  if(this.returnUrl.length > 1){
                    this.router.navigate([this.returnUrl]);
                    
                  }
                  else{
                      this.router.navigate(['/dashboard']);
                      
                  }
              },
              error => {
                  this.error = error;
              });
  }

  register(){
      this.router.navigateByUrl('signup');
  }
  
index(){
    this.router.navigateByUrl('index');
}
  
}
