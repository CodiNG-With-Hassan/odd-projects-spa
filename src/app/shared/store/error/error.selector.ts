import { Profile } from '@Models/profile.model';
import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { ErrorState } from './error.state';

export const selectErrorFeature: MemoizedSelector<object, ErrorState, DefaultProjectorFn<ErrorState>> = createFeatureSelector<ErrorState>('error');

export const selectError: MemoizedSelector<object, Profile, DefaultProjectorFn<Profile>> = createSelector(
  selectErrorFeature,
  (state: ErrorState) => state.error,
);
