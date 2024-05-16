import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from './models/UserModel';
import { NewuserComponent } from './newuser.component';
import { NewUserConstants } from './constants/NewUserConstants';

@Injectable({
  providedIn: 'root'
})
export class NewUserService{

    url = NewUserConstants.postUrl;
    constructor(private http: HttpClient){};

    // Write data to JSON file
    writeData(data: User): Observable<any> {
    return this.http.post(this.url, data);
  }
}