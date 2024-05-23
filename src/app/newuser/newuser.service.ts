import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { IUser } from './models/UserModel';
import { NewUserConstants } from './constants/NewUserConstants';

@Injectable({
  providedIn: 'root'
})
export class NewUserService{

    url = NewUserConstants.postUrl;
    constructor(private http: HttpClient){};

    //get data of objects
    getUserData(): Observable<IUser[]>{
      return this.http.get<IUser[]>(this.url);
    }

    // Write data to JSON file
    writeData(data: IUser): Observable<any> {
    return this.http.post(this.url, data);
  }
}