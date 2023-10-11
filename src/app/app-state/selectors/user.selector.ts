import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../index';

const selectUser = createFeatureSelector<AppState>('user'); 

export const selectUserData = createSelector(
  selectUser,
  (state: AppState) => state.user
);
