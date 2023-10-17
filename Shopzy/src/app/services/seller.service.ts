import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from '../data-type';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient,private router:Router) {}

  sellerSignUp(data: SignUp){
   this.http.post(`${this.baseUrl}`+"seller", data,{observe:'response'}).subscribe((result)=>{
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
    });
  }

  relodeSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }
}
