import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { selectIsLoggedin } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedin).pipe(
      first((x) => x !== null),
      map((isLoggedin: boolean | null) => {
        if (!isLoggedin) {
          this.router.navigateByUrl('/connexion');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
