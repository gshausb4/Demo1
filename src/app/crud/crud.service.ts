import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from './models/Property';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  private jsonUrl = '../../assets/data.json'; // assuming your JSON file is in assets folder
  postUrl = "http://localhost:3000/api/data";
  constructor(private http: HttpClient) { }

  //url = "https://shashidhar0902.github.io/Prop/PropertyDetails.json";
  
  // Read data from JSON file
  getPropertiesData(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>(this.jsonUrl);
  }

  // Write data to JSON file
  writeData(data: IProperty): Observable<any> {
    return this.http.post(this.postUrl, data);
  }

}