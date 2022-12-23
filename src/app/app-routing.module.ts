import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoandetailsComponent } from './customer/loandetails.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoanInfoComponent } from './loan-info/loan-info.component';

const routes: Routes = [
  {
    path:'customer',component:CustomerComponent
  },
  {
    path:'loandetails/:id',component:LoandetailsComponent
  },
  {
    path:'add',component:AddCustomerComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'loan', component:LoanInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
