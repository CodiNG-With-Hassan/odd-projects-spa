import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { map, Observable, switchMap, tap } from 'rxjs';
import { AuthRepository } from '../shared/auth.repository';
import { AuthResponse } from '../shared/models/auth-response.model';
import { AuthActionsTypes, signInSuccess, signUpSuccess } from './auth.actions';
import { SignInProps, SignInSuccessProps, SignUpProps, SignUpSuccessProps } from '../shared/models/auth-props.model';
import { AccessTokenService } from '../shared/access-token.service';
import { setUser } from '@Modules/users/store/users.actions';
import { Profile } from '@Models/profile.model';
import { Router } from '@angular/router';
import { ModuleRoutes } from '@Enums/routes.enum';

@Injectable()
export class AuthEffects {
  public signIn$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignIn),
          switchMap((action: SignInProps): Observable<AuthResponse> => this.authRepository.signIn(action.signInDetails)),
          map((response: AuthResponse) => signInSuccess({response})),
        )
    ),
  );

  public signInSuccess$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignInSuccess),
          map((action: SignInSuccessProps) => action.response.accessToken),
          tap((accessToken: string) => this.accessTokenService.decodeAccessToken(accessToken)),
          tap((accessToken: string) => this.accessTokenService.setAccessToken(accessToken)),
          map((): Profile => <Profile>this.accessTokenService.accessTokenData?.profile),
          tap(() => {
            this.router.navigate([ModuleRoutes.User]);
          }),
          map((user: Profile) => setUser({user})),
        )
    ),
  );

  public signUp$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignUp),
          switchMap((action: SignUpProps): Observable<AuthResponse> => this.authRepository.signUp(action.signUpDetails)),
          map((response: AuthResponse) => signUpSuccess({response})),
        )
    ),
  );

  public signUpSuccess$: CreateEffectMetadata = createEffect(
    () => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignUpSuccess),
          map((action: SignUpSuccessProps) => action.response.accessToken),
          tap((accessToken: string) => this.accessTokenService.decodeAccessToken(accessToken)),
          tap((accessToken: string) => this.accessTokenService.setAccessToken(accessToken)),
          map((): Profile => <Profile>this.accessTokenService.accessTokenData?.profile),
          tap(() => {
            this.router.navigate([ModuleRoutes.User]);
          }),
          map((user: Profile) => setUser({user})),
        )
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authRepository: AuthRepository,
    private readonly accessTokenService: AccessTokenService,
    private readonly router: Router,
  ) {
  }
}
