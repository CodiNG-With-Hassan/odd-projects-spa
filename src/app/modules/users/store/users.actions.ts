import { createAction, props } from '@ngrx/store';
import { ActionCreatorPropsType } from '@Types/action.types';
import { EditUserProps, EditUserSuccessProps, SetUserProps, SetUserSuccessProps } from '../shared/models/user-props.model';

export enum UserActionsTypes {
  SetUser = '[User] SET_USER',
  SetUserSuccess = '[User] SET_USER_SUCCESS',
  EditUser = '[User] EDIT_USER',
  EditUserSuccess = '[User] EDIT_USER_SUCCESS',
}

export const setUser: ActionCreatorPropsType<UserActionsTypes.SetUser, SetUserProps> = createAction(
  UserActionsTypes.SetUser,
  props<SetUserProps>(),
);

export const setUserSuccess: ActionCreatorPropsType<UserActionsTypes.SetUserSuccess, SetUserSuccessProps> = createAction(
  UserActionsTypes.SetUserSuccess,
  props<SetUserSuccessProps>(),
);

export const editUser: ActionCreatorPropsType<UserActionsTypes.EditUser, EditUserProps> = createAction(
  UserActionsTypes.EditUser,
  props<EditUserProps>(),
);

export const editUserSuccess: ActionCreatorPropsType<UserActionsTypes.EditUserSuccess, EditUserSuccessProps> = createAction(
  UserActionsTypes.EditUserSuccess,
  props<EditUserSuccessProps>(),
);
