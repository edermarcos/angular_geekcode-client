import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { StorageService } from './storage.service';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly storage: StorageService) {
  }

  public setEntityJsonp(url: string, cb: string) {
    return this.httpClient.jsonp(url, cb);
  }

  public setEntity(url: string, data: any, token?: string) {
    data.access_token = token || this.storage.getEntity(`${ this.storage.getEntity('u') }k`);
    const body = JSON.stringify(data);
    return this.httpClient.post(`${ config.api }/${ url }`, body, {headers: this.headers});
  }

  public updateEntity(endPoint: string, data: any, id: string, params?: string, baseUrl?: string, header?: HttpHeaders) {
    const body = JSON.stringify(data);
    return (baseUrl && baseUrl.length) ?
      this.httpClient.put(`${ baseUrl }?access_token=${ this.storage.getEntity(`${ this.storage.getEntity('u') }k`) }`, body, {headers: header ? header : this.headers}) :
      this.httpClient.put(`${ config.api }/${ endPoint }/${ id }?access_token=${ this.storage.getEntity(`${ this.storage.getEntity('u') }k`) }&${ params }`, body, {headers: this.headers});
  }

  public setMultipart(method: string, endPoint: string, data: any, id: string, baseUrl?: string) {
    return this.httpClient.request(
      new HttpRequest(method, `${ config.api }/${ endPoint }/${ id }?access_token=${ this.storage.getEntity(`${ this.storage.getEntity('u') }k`) }`, data, {
        responseType: 'text'
      })
    );
  }

  public getEntity(url: string, id: string, baseUrl?: string) {
    return (baseUrl && baseUrl.length) ?
      this.httpClient.get(baseUrl, {headers: this.headers}) :
      this.httpClient.get(`${ config.api }/${ url }/${ id }/?access_token=${ this.storage.getEntity(`${ this.storage.getEntity('u') }k`) }`, {headers: this.headers});
  }

  public getEntities(url: string, baseUrl?: string, header?: HttpHeaders) {
    const path = `${ config.api }/${ url }?access_token=${ this.storage.getEntity(`${ this.storage.getEntity('u') }k`) }`;
    return (baseUrl && baseUrl.length) ?
      this.httpClient.get(baseUrl, {headers: header ? header : this.headers}) :
      this.httpClient.get(path, {headers: this.headers});
  }

  public deleteEntity(url: string, id: string) {
    return this.httpClient.delete(`${ config.api }/${ url }/${ id }?access_token=${ this.storage.getEntity(`${ this.storage.getEntity('u') }k`) }`, {headers: this.headers});
  }

  public onTokenExpired() {
    this.storage.clear(`${ this.storage.getEntity('u') }k`);
    this.storage.clear('u');
    this.storage.clear('m');
    this.router.navigate(['/signin']);
  }
}
