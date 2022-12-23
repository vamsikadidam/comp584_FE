import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {
  url='http://localhost:8082/addCustomer';
  url1='http://localhost:8082/addLoanInfo';

  constructor(public http:HttpClient) { }

  getCustomers(){
    return this.http.get<any>("http://localhost:8082/getCustomer");
  }

  getCustomerDetails(){
    return this.http.get<any>("http://localhost:8082/customerDetails");
  }

  getLoandetails(loanId:number){
    return this.http.get<any>(`http://localhost:8082/loandetails/${loanId}`);

  }

  getloan(){
    return this.http.get<any>("http://localhost:8082/loanDetails");

  } 
  SaveCustomerData(data: any){

    console.log(data);

    return this.http.post(this.url,data);   

  }

  SaveLoanData(data: any){
    console.log(data);
    return this.http.post(this.url1,data);
  }
}
