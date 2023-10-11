import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from '../actions/user.actions';
import { initialUserState } from '../states/user.state';

export const userReducer = createReducer(
  initialUserState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user
  }))
);
