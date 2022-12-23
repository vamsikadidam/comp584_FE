import { Component, Inject, OnInit } from '@angular/core';
import {FormGroup, FormControl,ReactiveFormsModule} from '@angular/forms';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { ProjserviceService } from '../projservice.service';


@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {

  addLoan:FormGroup;

  constructor(private loanData:ProjserviceService,@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public authService: OktaAuthStateService) { }

  ngOnInit(): void {
    this.addLoan=new FormGroup( {
      // loanId: new FormControl(''),
      loanAmount: new FormControl(''),
      loanType: new FormControl('')
     } );
  }
  SaveLoanData(){
    // console.log(this.addLoan.value);
    this.loanData.SaveLoanData(this.addLoan.value).subscribe((result)=>{
      console.log(result);
      this.addLoan .reset({});
    

    });
    
  }

}
