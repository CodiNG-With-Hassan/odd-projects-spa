import { SetErrorProps } from '@Models/error-props.model';
import { createAction, props } from '@ngrx/store';
import { ActionCreatorPropsType, ActionCreatorType } from '@Types/action.types';

export enum ErrorActionsTypes {
  SetError = '[Error] SET_ERROR',
  ClearError = '[Error] CLEAR_ERROR',
}

export const setError: ActionCreatorPropsType<ErrorActionsTypes.SetError, SetErrorProps> = createAction(
  ErrorActionsTypes.SetError,
  props<SetErrorProps>(),
);

export const clearError: ActionCreatorType<ErrorActionsTypes.ClearError> = createAction(
  ErrorActionsTypes.ClearError,
);
