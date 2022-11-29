import { Injectable } from '@angular/core';
import { Profile } from '@Models/profile.model';
import { AccessTokenService } from '@Modules/auth/shared/access-token.service';
// import { AuthResponse } from '@Modules/auth/shared/models/auth-response.model';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { map, Observable, switchMap, tap } from 'rxjs';
// import { EditUserProps, SetUserProps } from '../shared/models/user-props.model';
import { UsersRepository } from '../shared/users.repository';
import { editUserSuccess, setUserSuccess, UserActionsTypes } from './users.actions';

@Injectable()
export class UserEffects {
  public setUser$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(UserActionsTypes.SetUser),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          map((action: any) => action.user),
          map((user: Profile) => setUserSuccess({user})),
        )
    ),
  );

  public setUserSuccess$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(UserActionsTypes.SetUserSuccess),
        )
    ),
    { dispatch: false },
  );

  public editUser$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(UserActionsTypes.EditUser),
          // switchMap((action: EditUserProps): Observable<AuthResponse> => this.usersRepository.editUser(action.editedUser)),
          tap((accessToken: string) => this.accessTokenService.decodeAccessToken(accessToken)),
          tap((accessToken: string) => this.accessTokenService.setAccessToken(accessToken)),
          map((): Profile => <Profile>this.accessTokenService.accessTokenData?.profile),
          map((user: Profile) => editUserSuccess({user})),
        )
    ),
  );

  public editUserSuccess$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(UserActionsTypes.EditUserSuccess),
        )
    ),
    { dispatch: false },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly usersRepository: UsersRepository,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }
}
