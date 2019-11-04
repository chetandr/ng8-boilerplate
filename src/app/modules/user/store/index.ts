import * as fromUser from './reducers/user.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserEntityState {
    user: fromUser.State;
}

export interface State {
    user: UserEntityState;
}

export const reducers = {
    user: fromUser.reducer
};

export const getAuthRootState = createFeatureSelector<UserEntityState>('user');

// export const getAuthToken = createSelector(
//     getAuthRootState,
//     (state: AuthEntityState) => state.auth.jwtToken
// );