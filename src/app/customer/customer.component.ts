import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { customer } from 'src/customer';
import { loan } from 'src/loan';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  loan:loan[]=[];
  cust:customer[]=[];

  // customerDetails:any;

  constructor(public service:ProjserviceService,@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public authService: OktaAuthStateService) { }

  ngOnInit(): void {

    // let response= this.http.get("http://localhost:8080/customerDetails");
    // response.subscribe((data)=>this.customerDetails=data);
    // // console.log(data)); 
    // this.cust=new customer();
  }

  getCustomerDetails():void{
    this.service.getloan().subscribe(
      data=>{
        this.loan=data;
      }
    )

  }

  // customerDetails():void{
  //   this.service.getCustomerDetails().subscribe(
  //     data=>{
  //       this.loan=data;
  //     }
  //   )

  // }

}
