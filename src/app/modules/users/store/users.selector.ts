import { Profile } from '@Models/profile.model';
import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { UserState } from './users.state';

export const selectUserFeature: MemoizedSelector<object, UserState, DefaultProjectorFn<UserState>> = createFeatureSelector<UserState>('user');

export const selectUserPending: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>> = createSelector(
  selectUserFeature,
  (state: UserState) => state.pending,
);

export const selectUser: MemoizedSelector<object, Profile, DefaultProjectorFn<Profile>> = createSelector(
  selectUserFeature,
  (state: UserState) => state.user,
);
