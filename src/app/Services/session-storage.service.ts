import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() { }

  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }

  //setitem value of key to false
  setItem(key: string, value: any): void {
        sessionStorage.setItem(key,value);
    }
  //  removeItem
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
