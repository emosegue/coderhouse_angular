import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const openSession = createAction(
  '[Auth Login] Create Session',
  props<{ user: User }>()
);

export const closeSession = createAction('[Auth Login] Close Session');
