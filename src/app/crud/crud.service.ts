import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from './Property';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  url = "https://shashidhar0902.github.io/Prop/PropertyDetails.json";

  getAPIPropertyDetails(): Observable<IProperty[]>{
    return this.http.get<IProperty[]>(this.url);
  }

}