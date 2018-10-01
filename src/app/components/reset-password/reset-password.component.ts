import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidation } from '../../classes/PasswordValidation';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private admin: AdminService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          oldPassword: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
        validator: PasswordValidation.MatchPassword // Custom validation method
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      if (this.loginForm.invalid) {
          this.error = "Please complete the form."
          return;
      }

      this.admin.resetPassword(this.loginForm.value)
          .subscribe(
              data => {
                if (data.passwordResetStatus) {
                  this.router.navigateByUrl('login/success/Password successfully changed. Login with new password.')
                } else {
                  this.error = data.message
                }
              },
              error => {
                  this.error = error;
              });
  }

}
