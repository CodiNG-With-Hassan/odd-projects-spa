import { Injectable } from '@angular/core';
import { State } from '@Models/store.model';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { SignInDetails, SignUpDetails } from '../shared/models/auth-details.model';
import { signIn, signUp } from './auth.actions';
import { selectAuthPending } from './auth.selectors';

@Injectable()
export class AuthFacade {
  public selectAuthPending$: Observable<boolean> = this.store.pipe(select(selectAuthPending));

  constructor(
    private readonly store: Store<State>,
  ) {
  }

  public signIn(signInDetails: SignInDetails): void {
    this.store.dispatch(signIn({signInDetails}));
  }

  public signUp(signUpDetails: SignUpDetails): void {
    this.store.dispatch(signUp({signUpDetails}));
  }
}
