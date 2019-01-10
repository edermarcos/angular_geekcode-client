import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor() { }

  public getOSName(): string {
    if (navigator.appVersion.indexOf('Win') != -1) return 'Windows';
    if (navigator.appVersion.indexOf('Mac') != -1) return 'MacOS';
    if (navigator.appVersion.indexOf('X11') != -1) return 'UNIX';
    if (navigator.appVersion.indexOf('Linux') != -1) return 'Linux';
    return 'unknown OS';
  }

  public getBrowserInfo(): any {
    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name: 'IE ', version: (tem[1] || '')};
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\bOPR\/(\d+)/);
      if (tem != null) {
        return {name: 'Opera', version: tem[1]};
      }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
      M.splice(1, 1, tem[1]);
    }
    return {
      name: M[0],
      version: M[1]
    };
  }
}
