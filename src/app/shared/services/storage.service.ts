import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setEntity(key: string, entity: string) {
    localStorage.setItem(key, entity);
  }

  getEntity(key: string) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  }

  clear(key: string) {
    return localStorage.removeItem(key);
  }
}
