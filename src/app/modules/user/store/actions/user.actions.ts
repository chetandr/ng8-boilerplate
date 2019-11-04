import { createAction, props } from '@ngrx/store';

export const loadUserList = createAction(
  '[User] Load User List'
);

export const loadUserListSuccessful = createAction(
  '[User] Load User List Successful',
  props<{ users: any }>()
);