import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { delay, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

const OK_USERS$ = of(['bazera', 'kote', 'beso']).pipe(delay(2000));

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return OK_USERS$.pipe(
      map((users) => {
        if (users.includes(this.authService.currentUser)) {
          return true;
        }

        return false;
      })
    );
  }
}
