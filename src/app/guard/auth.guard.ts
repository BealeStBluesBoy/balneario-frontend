import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    console.log('hola mundo');
    if (this.auth.estaAutenticado()) {
      return true;
    } else {
      this.auth.logout();
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
