import { UserActionI } from './user.actions';
import { SET_USER, SET_USER_LIST } from './user.constants';
import { UserI } from './user.interface';

export interface UserStoreI {
    list: UserI[];
    selectedUser?: UserI;
}

const initialState: UserStoreI = {
    list: [],
    selectedUser: undefined,
};

export function user(state: UserStoreI = initialState, action: UserActionI): UserStoreI {
    switch (action.type) {
        case SET_USER:
            return { ...state, selectedUser: action.payload };
        case SET_USER_LIST:
            return { ...state, list: [...state.list, ...action.payload] };
        default:
            return state;
    }
}