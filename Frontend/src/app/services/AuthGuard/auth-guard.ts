import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild  {

  constructor(private router: Router) {}

  private isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // token check
  }

  // parent route check
  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.checkAccess(route);
  }

  // all children check
  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.checkAccess(childRoute);
  }

  private checkAccess(route: ActivatedRouteSnapshot): boolean | UrlTree {
    if (route.data?.['bypassAuth']) {
    return true; // allow access without login
  }
    if (this.isLoggedIn()) {
      return true; // allow access
    } else {
      return this.router.parseUrl('/login'); // redirect to login
    }
  }
}
