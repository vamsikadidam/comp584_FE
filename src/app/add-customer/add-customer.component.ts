import { Component, Inject, OnInit } from '@angular/core';
import {FormGroup, FormControl,ReactiveFormsModule} from '@angular/forms';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { ProjserviceService } from '../projservice.service';
// import {} from


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomer:FormGroup;
  addLoan:FormGroup;

  constructor(private loanData:ProjserviceService, private customer:ProjserviceService,@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public authService: OktaAuthStateService) { }

  

  ngOnInit(): void {
    this.addCustomer=new FormGroup( {
      // customerId: new FormControl(''),
      customerName: new FormControl(''),
      address: new FormControl(''),
      pan: new FormControl(''),
      loanAmount: new FormControl(''),
      loanType: new FormControl('')
     } );
  }

  SaveData(){
    // console.log(this.addCustomer.value);
    this.customer.SaveCustomerData(this.addCustomer.value).subscribe((result)=>{
      console.log(result);
      this.addCustomer.reset({});
    
    });
    // this.loanData.SaveCustomerData(this.addLoan.value).subscribe((result)=>{
    //   console.log(result);
    // });
  }

  // SaveLoanData(){
  //   // console.log(this.addLoan.value);
  //   this.loanData.SaveCustomerData(this.addLoan.value).subscribe((result)=>{
  //     console.log(result);
  //   });
  // }

}
