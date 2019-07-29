import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent  } from "../components/page-not-found/page-not-found.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { BioComponent } from "../components/bio/bio.component";
import { MyProfileComponent } from "../components/my-profile/my-profile.component";
import { EdExComponent } from "../components/ed-ex/ed-ex.component";
import { PortfolioComponent } from "../components/portfolio/portfolio.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { UpdateportfolioComponent } from "../components/updateportfolio/updateportfolio.component";
import { LandingPageComponent } from "../components/landing-page/landing-page.component";
import { ViewProfileComponent } from "../components/view-profile/view-profile.component";
import { SearchResultsComponent } from "../components/search-results/search-results.component";
import { PortfolioListComponent } from "../components/portfolio-list/portfolio-list.component";
import { ResetPasswordComponent } from "../components/reset-password/reset-password.component";
import { AuthGuard } from "../Auth/auth.guard";

const routes: Routes = [
  // { path:'resetPassword',component: ResetPasswordComponent , canActivate: [AuthGuard] },
  // { path: 'register/customer', component: RegistrationComponent ,canActivate: [AuthGuard]},
  { path:'portfolio', component:PortfolioComponent, canActivate: [AuthGuard]},
  { path:'myProfile', component:MyProfileComponent,canActivate: [AuthGuard]},
  { path:'searchResult', component:SearchResultsComponent},
  { path:'viewProfile', component:ViewProfileComponent},
  { path:'updatePortfolio', component:UpdateportfolioComponent, canActivate: [AuthGuard]},
  { path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  { path:'index', component:LandingPageComponent},
  { path:'portfolioList', component:PortfolioListComponent, canActivate: [AuthGuard]},
  { path:'resetPassword',component: ResetPasswordComponent},
  { path: 'signup', component: RegistrationComponent },
  { path: 'bio', component: BioComponent, canActivate: [AuthGuard]},
  { path: 'sidebar', component:SidebarComponent},
  { path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  { path: 'educationandexperience', component: EdExComponent, canActivate: [AuthGuard]},
  { path: 'side', component: SidebarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:message', component: LoginComponent },
  { path: 'login/success/:successMessage', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}