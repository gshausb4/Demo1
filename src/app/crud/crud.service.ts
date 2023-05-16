import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from './Property';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/";

  getAPIPropertyDetails(): Observable<IProperty[]>{
    return this.http.get<IProperty[]>(this.url);
  }

  // postAPIPropertyDetails(POSTProperty: IProperty): Observable<IProperty>{
  //   const headers = { 'content-type': 'application/json'}  
  //   const body = JSON.stringify(POSTProperty);
  //   return this.http.post<IProperty>(this.url, body,{'headers':headers})
  // }

}