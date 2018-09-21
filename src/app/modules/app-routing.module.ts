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
import { DateComponent } from "../components/date/date.component";
import { AuthGuard } from "../Auth/auth.guard";

const routes: Routes = [
  { path:'date',component: DateComponent },
  { path: 'appointment/updateAppointment/:id', component: UpdateAppointmentComponent },
  { path: 'AppointmentList', component: AppointmentListComponent },
  { path: 'customer/updateCustomers/:id', component: UpdateComponent },
  { path: 'register/appointment', component: AppointmentComponent },
  { path: 'get/customerlist', component: SearchComponent },
  { path: 'generateCard', component: GenerateCardNoComponent },
  { path: 'register/customer', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:message', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}