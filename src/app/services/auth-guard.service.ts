import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().do(logedIn => {
      if (logedIn) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    });
  }
}
