// auth.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const selectIsAuthenticated = createSelector(
  getAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const selectError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);
