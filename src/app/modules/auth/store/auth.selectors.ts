import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthFeature: MemoizedSelector<object, AuthState, DefaultProjectorFn<AuthState>> = createFeatureSelector<AuthState>('auth');

export const selectAuthPending: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>> = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.pending,
);
