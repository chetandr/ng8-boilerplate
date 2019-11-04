import { createReducer, Action } from '@ngrx/store';

export interface State {

}

const INITIAL_STATE: State = {

};

export const layoutReducer = createReducer(INITIAL_STATE, );

export function reducer(state: State | undefined, action: Action) {
    return layoutReducer(state, action);
}