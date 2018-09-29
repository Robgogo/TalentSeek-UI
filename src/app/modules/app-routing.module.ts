import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent  } from "../components/page-not-found/page-not-found.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from '../components/login/login.component';
import { GenerateCardNoComponent } from '../components/generate-card-no/generate-card-no.component';
import { SearchComponent } from '../components/search/search.component';
import { AppointmentComponent } from '../components/appointment/appointment.component';
import { UpdateComponent } from '../components/update/update.component';
import { AppointmentListComponent } from '../components/appointment-list/appointment-list.component';
import { UpdateAppointmentComponent } from '../components/update-appointment/update-appointment.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ReportComponent } from "../components/report/report.component";
import { AuthGuard } from "../Auth/auth.guard";
import { ResetPasswordComponent } from './../components/reset-password/reset-password.component';
const routes: Routes = [
  { path:'dailyAppointmentReport',component: ReportComponent , canActivate: [AuthGuard] },
  { path:'app',component: AppointmentComponent },
  { path: 'appointment/updateAppointment/:id', component: UpdateAppointmentComponent , canActivate: [AuthGuard] },
  { path: 'AppointmentList', component: AppointmentListComponent ,canActivate: [AuthGuard]},
  { path: 'customer/updateCustomers/:id', component: UpdateComponent ,canActivate: [AuthGuard]},
  { path: 'register/appointment', component: AppointmentComponent ,canActivate: [AuthGuard]},
  { path: 'get/customerlist', component: SearchComponent ,canActivate: [AuthGuard]},
  { path: 'generateCard', component: GenerateCardNoComponent },
  { path: 'register/customer', component: RegistrationComponent ,canActivate: [AuthGuard]},
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'login/:message', component: LoginComponent },
  { path: 'login/success/:successMessage', component: LoginComponent }, // login with success message
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}