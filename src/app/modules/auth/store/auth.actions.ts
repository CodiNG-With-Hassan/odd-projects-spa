import { createAction, props } from '@ngrx/store';
import { ActionCreatorPropsType } from '@Types/action.types';
import { SignInProps, SignInSuccessProps, SignUpProps, SignUpSuccessProps } from '../shared/models/auth-props.model';

export enum AuthActionsTypes {
  SignIn = '[Auth] SIGN_IN',
  SignInSuccess = '[Auth] SIGN_IN_SUCCESS',
  SignUp = '[Auth] SIGN_UP',
  SignUpSuccess = '[Auth] SIGN_UP_SUCCESS',
}

export const signIn: ActionCreatorPropsType<AuthActionsTypes.SignIn, SignInProps> = createAction(
  AuthActionsTypes.SignIn,
  props<SignInProps>(),
);

export const signInSuccess: ActionCreatorPropsType<AuthActionsTypes.SignInSuccess, SignInSuccessProps> = createAction(
  AuthActionsTypes.SignInSuccess,
  props<SignInSuccessProps>(),
);

export const signUp: ActionCreatorPropsType<AuthActionsTypes.SignUp, SignUpProps> = createAction(
  AuthActionsTypes.SignUp,
  props<SignUpProps>(),
);

export const signUpSuccess: ActionCreatorPropsType<AuthActionsTypes.SignUpSuccess, SignUpSuccessProps> = createAction(
  AuthActionsTypes.SignUpSuccess,
  props<SignUpSuccessProps>(),
);
