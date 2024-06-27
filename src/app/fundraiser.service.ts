import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fundraiser } from './fundraiser';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {
  private apiUrl = 'https://localhost:44396/api';

  constructor(private http: HttpClient) { }
 

  Signup(body: any): Observable<any> {
    const url = `${this.apiUrl}/users/Signup`;
    return this.http.post<any>(url, body);
  }

  login(body: any): Observable<any> {
    const url = `${this.apiUrl}/users/login`;
    return this.http.post<any>(url, body);
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

  private DocData = new BehaviorSubject<any | null>(null);
  GetDocData$ = this.DocData.asObservable();
  sendselectedorg(data: any | null): void { this.DocData.next(data); }



}
