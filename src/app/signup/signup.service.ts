import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginDetails} from './Credentials';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  url = "https://shashidhar0902.github.io/Prop/UserDetails.json";
  
  getAPILoginDetails(): Observable<LoginDetails[]>{
    return this.http.get<LoginDetails[]>(this.url);
  }
}
