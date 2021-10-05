import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../shared/interfaces/user.interface';
import { selectCurrentUser } from '../../shared/store/auth.selectors';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  public user$: Observable<User | null> = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
