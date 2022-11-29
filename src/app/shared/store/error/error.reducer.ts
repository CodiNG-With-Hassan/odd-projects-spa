import { SetErrorActionType } from '@Models/action.types';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { clearError, setError } from './error.actions';
import { ErrorState } from './error.state';

export const errorInitialState: ErrorState = {
  error: null,
};

export const errorReducer: ActionReducer<ErrorState>= createReducer(
  errorInitialState,
  on(
    setError,
    (state: ErrorState, action: SetErrorActionType): ErrorState => ({
      ...state,
       error: action.error,
    }),
  ),
  on(
    clearError,
    (state: ErrorState): ErrorState => ({
      ...state,
      error: null,
    }),
  ),
);
