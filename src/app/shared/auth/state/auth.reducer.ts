// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import * as AuthActions from './auth.action';

const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, state => ({
    ...state,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error,
  })),
  on(AuthActions.logout, state => ({
    ...state,
    error: null,
  })),
  on(AuthActions.logoutSuccess, state => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: null,
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: AuthState | undefined, action: any) {
  return authReducer(state, action);
}
