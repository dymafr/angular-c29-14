import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tryLogoutAction } from './shared/store/auth.actions';
import { selectIsLoggedin } from './shared/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedin$: Observable<boolean | null> =
    this.store.select(selectIsLoggedin);

  public logout() {
    this.store.dispatch(tryLogoutAction());
  }

  constructor(private store: Store) {}
}
