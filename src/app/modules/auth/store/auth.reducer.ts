import { ActionReducer, createReducer, on } from '@ngrx/store';
import { signIn, signInSuccess, signUp, signUpSuccess } from './auth.actions';
import { AuthState } from './auth.state';

export const authInitialState: AuthState = {
  pending: false,
};

export const authReducer: ActionReducer<AuthState>= createReducer(
  authInitialState,
  on(
    signIn,
    (state: AuthState): AuthState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    signInSuccess,
    (state: AuthState): AuthState => ({
      ...state,
      pending: false,
    }),
  ),
  on(
    signUp,
    (state: AuthState): AuthState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    signUpSuccess,
    (state: AuthState): AuthState => ({
      ...state,
      pending: false,
    }),
  ),
);
