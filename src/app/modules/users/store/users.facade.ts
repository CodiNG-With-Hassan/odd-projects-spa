import { Injectable } from '@angular/core';
import { Profile } from '@Models/profile.model';
import { State } from '@Models/store.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetUserProps } from '../shared/models/user-props.model';
import { editUser, setUser } from './users.actions';
import { selectUser, selectUserPending } from './users.selector';

@Injectable()
export class UserFacade {
  public selectUserPending$: Observable<boolean> = this.store.pipe(select(selectUserPending));
  public selectUser$: Observable<Profile> = this.store.pipe(select(selectUser));

  constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setUser(user: Profile): void {
    this.store.dispatch(setUser({user}));
  }

  public editUser(editedUser: Partial<Profile>): void {
    this.store.dispatch(editUser({editedUser}));
  }
}
