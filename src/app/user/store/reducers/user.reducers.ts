import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface State {
    userList: any,
    isLoading: boolean
}

const INITIAL_STATE: State = {
    userList: '',
    isLoading: false
};

export const authReducer = createReducer(
    INITIAL_STATE,
    // Even thought the `state` is unused, it helps infer the return type
    on(UserActions.loadUserList, state => ({
        ...state,
        isLoading: true,
    })),
    on(UserActions.loadUserListSuccessful, (state, { users }) => {
        console.log('====Users====', users);
        return ({
            ...state,
            userList: users,
            isLoading: false,
        });
    })
);

export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}