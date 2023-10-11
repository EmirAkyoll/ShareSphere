import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { User } from '../interfaces';

export interface AppState {
  user: User[];
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};