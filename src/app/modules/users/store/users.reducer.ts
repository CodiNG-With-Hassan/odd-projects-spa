import { ActionReducer, createReducer, on } from '@ngrx/store';
import { EditUserSuccessActionType, SetUserSuccessActionType } from '../shared/types/action.types';
import { editUser, editUserSuccess, setUser, setUserSuccess } from './users.actions';
import { UserState } from './users.state';

export const userInitialState: UserState = {
  user: {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    admin: false,
    createdAt: '',
    active: false,
  },
  pending: false,
};

export const userReducer: ActionReducer<UserState>= createReducer(
  userInitialState,
  on(
    setUser,
    (state: UserState): UserState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    setUserSuccess,
    (state: UserState, action: SetUserSuccessActionType): UserState => ({
      ...state,
      pending: false,
      user: action.user,
    }),
  ),
  on(
    editUser,
    (state: UserState): UserState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    editUserSuccess,
    (state: UserState, action: EditUserSuccessActionType): UserState => ({
      ...state,
      pending: false,
      // user: action.user,
    }),
  ),
);
