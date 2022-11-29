import { ErrorActionsTypes } from '@Store/error/error.actions';
import { TypedActionProps } from '@Types/action.types';
import { SetErrorProps } from './error-props.model';

export type SetErrorActionType = (
  TypedActionProps<ErrorActionsTypes.SetError, SetErrorProps>
);
