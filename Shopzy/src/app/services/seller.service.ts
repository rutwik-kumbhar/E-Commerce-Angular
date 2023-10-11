import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  sellerSignUp(data: SignUp): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+"seller", data);
  }
}
