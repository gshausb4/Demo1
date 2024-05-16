import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from './models/Property';
import { crudConstants } from './constants/crud-constants';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  private url = crudConstants.postUrl; // assuming your JSON file is in assets folder

  constructor(private http: HttpClient) { }

  // Read data from JSON file
  getPropertiesData(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>(this.url);
  }

  // Write data to JSON file
  writeData(data: IProperty): Observable<any> {
    return this.http.post(this.url, data);
  }

  // Delete property by ID
  deleteProperty(propertyId: number): Observable<any> {
    const url = `${this.url}/${propertyId}`;
    return this.http.delete(url);
  }

}