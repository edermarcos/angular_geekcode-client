import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { MenuInterface } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private url: string;
  private userMenu: MenuInterface[];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly storage: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    this.userMenu = JSON.parse(this.storage.getEntity('m'));
    if (this.auth.isAuthenticated()) {
      if (this.userMenu && !this.userMenu.some((menuItem: MenuInterface) => this.url.indexOf(menuItem.url) === 0)) {
        // this.router.navigate([config.root]);
      }
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

  public getLastUrl(): string {
    return this.url;
  }
}
