import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { map, Observable, switchMap, tap } from 'rxjs';
import { AuthRepository } from '../shared/auth.repository';
import { AuthResponse } from '../shared/models/auth-response.model';
import { AuthActionsTypes, signInSuccess, signUpSuccess } from './auth.actions';
import { SignInProps, SignInSuccessProps, SignUpProps } from '../shared/models/auth-props.model';
import { AccessTokenService } from '../shared/access-token.service';

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
        )
    ),
    { dispatch: false },
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

  // public signUpSuccess$: CreateEffectMetadata = createEffect(
  //   () => (
  //     this.actions$
  //       .pipe(
  //         ofType(AuthActionsTypes.SignUp),
  //         switchMap((action: SignUpProps): Observable<AuthResponse> => this.authRepository.signUp(action.signUpDetails)),
  //         map((response: AuthResponse) => signUpSuccess({response})),
  //       )
  //   ),
  // );

  constructor(
    private readonly actions$: Actions,
    private readonly authRepository: AuthRepository,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }
}
