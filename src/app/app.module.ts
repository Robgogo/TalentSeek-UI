import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./modules/app-routing.module";
import { HttpClientModule }    from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


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
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
