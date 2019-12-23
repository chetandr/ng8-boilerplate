import * as fromLayout from './reducers/layout.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface LayoutEntityState {
    layout: fromLayout.State;
}

export interface State {
    layout: LayoutEntityState;
}

export const reducers = {
    layout: fromLayout.reducer
};

export const getAuthRootState = createFeatureSelector<LayoutEntityState>('layout');

// export const getAuthToken = createSelector(
//     getAuthRootState,
//     (state: AuthEntityState) => state.auth.jwtToken
// );