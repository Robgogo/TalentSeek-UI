import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./modules/app-routing.module";
import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ErrorInterceptor } from "./Auth/error.interceptor";
import { JwtInterceptor } from "./Auth/jwt.interceptor";
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BioComponent } from './components/bio/bio.component';
import { EdExComponent } from './components/ed-ex/ed-ex.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { EdexListComponent } from './components/edex-list/edex-list.component';
import { UpdateportfolioComponent } from './components/updateportfolio/updateportfolio.component';
import { UpdateEdExComponent } from './components/update-ed-ex/update-ed-ex.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageNotFoundComponent,
    HomeComponent,
    MainComponent,
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    PortfolioComponent,
    BioComponent,
    EdExComponent,
    DashboardComponent,
    PortfolioListComponent,
    EdexListComponent,
    UpdateportfolioComponent,
    UpdateEdExComponent,
    LandingPageComponent,
    ProfileComponent,
    SearchResultsComponent,
    MyProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),// ToastrModule added,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
