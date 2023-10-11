import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces';

export const loginSuccess = createAction(
  '[LoginComponent] Login Success',
  props<{ user: User[] }>()
);
