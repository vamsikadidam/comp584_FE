import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { loan } from 'src/loan';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  id:number;
  loan1:loan;

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,public ser:ProjserviceService,@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public authService: OktaAuthStateService) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=idparam?+idparam:0;
    this.ser.getLoandetails(this.id).subscribe(
      data=>{
        this.loan1=data;
      }
    );
  }

}
