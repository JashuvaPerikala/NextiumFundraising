import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Fundraiser } from './fundraiser';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {
  private apiUrl = 'https://localhost:44396/api';

  constructor(private http: HttpClient,private toast : ToastrService) { }
 

  Signup(body: any): Observable<any> {
    const url = `${this.apiUrl}/users/Signup`;
    return this.http.post<any>(url, body);
  }

  login(body: any): Observable<any> {
    const url = `${this.apiUrl}/users/login`;
    return this.http.post<any>(url, body).pipe(catchError(this.handleError));
  }

  OrganizationReg(body: any): Observable<any> {
    const url = `${this.apiUrl}/Organizations`;
    return this.http.post<any>(url, body);
  }

  GetOrganization(): Observable<any> {
    const url = `${this.apiUrl}/Organizations`;
    return this.http.get<any>(url);
  }

  Donors(body: any): Observable<any> {
    const url = `${this.apiUrl}/Donors`;
    return this.http.post<any>(url, body);
  }

  SearchGet(data:any): Observable<any> {
    const url = `${this.apiUrl}/Organizations/search?searchRequest=${data}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  Phoneget(data:any): Observable<any> {
    const url = `${this.apiUrl}/Donors/${data}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  forgotpasswordservice(payload:any): Observable<any> {
    const url = `${this.apiUrl}/Users/forgot-password?EmailOrUserName=${payload?.EmailOrUserName}`;
    return this.http.post<any>(url,payload).pipe(catchError(this.handleError));
  }

  Userupdatepaswrd(payload:any): Observable<any> {
    const url = `${this.apiUrl}/Users?Email=${payload?.Email}&password=${payload?.password}`;
    return this.http.put<any>(url,payload).pipe(catchError(this.handleError));
  }

  checkNetwork(){
    var network : boolean = true;
    if(!navigator.onLine){
      network = false;
      this.toast.error('Please try again with active network connection.');
    }
    return network;
  }







   //behaviour subj to transfer data
  private DocData = new BehaviorSubject<any | null>(null);
  GetDocData$ = this.DocData.asObservable();
  sendselectedorg(data: any | null): void { this.DocData.next(data); }

  private footData = new BehaviorSubject<any | null>(null);
  GetfootData$ = this.footData.asObservable();
  sendfooterclk(data: any | null): void { this.footData.next(data); }

  private donentry = new BehaviorSubject<any | null>(null);
  GetdonData$ = this.donentry.asObservable();
  senddonclk(data: any | null): void { this.donentry.next(data); }







  private handleError(err: any) {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
     errorMessage = err.error;
    }
    return throwError(errorMessage);
  }



}
