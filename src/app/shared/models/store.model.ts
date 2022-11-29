import { AuthState } from '@Modules/auth/store/auth.state';
import { UserState } from '@Modules/users/store/users.state';
import { ActionReducer } from '@ngrx/store';
import { ErrorState } from '@Store/error/error.state';

export interface LazyModules {
  auth: AuthState;
  user: UserState;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Shared {
  error: ErrorState;
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
