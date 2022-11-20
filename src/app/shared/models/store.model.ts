import { AuthState } from '@Modules/auth/store/auth.state';
import { ActionReducer } from '@ngrx/store';

export interface LazyModules {
  auth: AuthState;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Shared {
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
