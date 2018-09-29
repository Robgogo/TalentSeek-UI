import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./modules/app-routing.module";
import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ErrorInterceptor } from "./Auth/error.interceptor";
import { JwtInterceptor } from "./Auth/jwt.interceptor";
import { DatePipe } from '@angular/common';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './components/login/login.component';
import { GenerateCardNoComponent } from './components/generate-card-no/generate-card-no.component';
import { SearchComponent } from './components/search/search.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { UpdateComponent } from './components/update/update.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DateComponent } from './components/date/date.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { UpdateAppointmentComponent } from './components/update-appointment/update-appointment.component';
import { ReportComponent } from './components/report/report.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageNotFoundComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    GenerateCardNoComponent,
    SearchComponent,
    AppointmentComponent,
    UpdateComponent,
    RegistrationComponent,
    DateComponent,
    AppointmentListComponent,
    UpdateAppointmentComponent,
    ReportComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    DlDateTimePickerDateModule,NgbModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
