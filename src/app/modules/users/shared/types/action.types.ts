import { UserActionsTypes } from '@Modules/users/store/users.actions';
import { TypedActionProps } from '@Types/action.types';
import { EditUserProps, EditUserSuccessProps, SetUserProps, SetUserSuccessProps } from '../models/user-props.model';

export type SetUserActionType = (
  TypedActionProps<UserActionsTypes.SetUser, SetUserProps>
);

export type SetUserSuccessActionType = (
  TypedActionProps<UserActionsTypes.SetUserSuccess, SetUserSuccessProps>
);

export type EditUserActionType = (
  TypedActionProps<UserActionsTypes.EditUser, EditUserProps>
);

export type EditUserSuccessActionType = (
  TypedActionProps<UserActionsTypes.EditUserSuccess, EditUserSuccessProps>
);
