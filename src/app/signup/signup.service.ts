import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginDetails} from './models/Credentials';
import { signupConstants } from './constants/signupconstants';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url = signupConstants.url;

  constructor(private http: HttpClient) { }
    
  getAPILoginDetails(): Observable<LoginDetails[]>{
    return this.http.get<LoginDetails[]>(this.url);
  }

}
