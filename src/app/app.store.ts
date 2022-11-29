import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

import { Reducers, Shared, State } from '@Models/store.model';
import { authInitialState } from '@Modules/auth/store/auth.reducer';
import { userInitialState } from '@Modules/users/store/users.reducer';
import { errorInitialState, errorReducer } from '@Store/error/error.reducer';

export const initialState: State = {
  auth: authInitialState,
  user: userInitialState,
  shared: {
    error: errorInitialState,
  },
};

export const getReducers: () => Reducers = (): Reducers => reducers;

export const getInitialState: () => State = (): State => initialState;

const sharedReducers: ActionReducer<Shared> = combineReducers({
  error: errorReducer,
});

export const reducers: Reducers = {
  shared: sharedReducers,
};

export const reducerToken: InjectionToken<ActionReducerMap<State>> = new InjectionToken('Registered Reducers');

export const REDUCER_PROVIDER: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
