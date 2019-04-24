import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/landing/landing.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { SignInComponent } from '../app/sign-in/sign-in.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { DataChartComponent } from './data-chart/data-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'account', component: UserAccountComponent},
  { path: 'data-visualization', component: DataChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
