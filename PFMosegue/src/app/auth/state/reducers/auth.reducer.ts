import { createReducer, on } from '@ngrx/store';
import { SessionState } from 'src/app/core/models/session.state.model';
import * as AuthActions from 'src/app/auth/state/actions/auth.action';

export const authFeatureKey = 'auth';

export const initialState: SessionState = {
  activeUser: {
    idUser: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: undefined,
    bornDate: new Date(1944, 1, 1),
    gender: 0,
    profileType: undefined,
    accountType: [],
    isAdministrator: undefined,
  },
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.openSession, (state, { user }) => {
    return { ...state, activeUser: user };
  }),

  on(AuthActions.closeSession, state => {
    return initialState;
  })
);
