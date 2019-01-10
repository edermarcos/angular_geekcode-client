import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from './storage.service';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService) {
  }

  public auth(username: string, password: string, access_token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Basic ${ btoa(`${ username }:${ password }`) }`,
      'Content-Type': 'application/json',
    });
    const body = JSON.stringify({ access_token });
    return this.http
      .post(`${ config.api }/auth`, body, { headers });
  }

  public isAuthenticated(): boolean {
    return !!this.storage.getEntity(`${ this.storage.getEntity('u') }k`);
  }
}
