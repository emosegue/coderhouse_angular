import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/state/reducers/auth.reducer';
import { SessionState } from 'src/app/core/models/session.state.model';

export const selectAuthState = createFeatureSelector<SessionState>(
  fromAuth.authFeatureKey
);

export const selectorActiveSession = createSelector(
  selectAuthState,
  (state: SessionState) => {
    return state;
  }
);
