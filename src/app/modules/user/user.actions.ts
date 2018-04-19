import * as constants from './user.constants';
import * as httpActions from '../../common/http/http.actions';
import { UserI } from './user.interface';

import { Dispatch } from 'redux';

export interface FetchUserI {
    type: constants.FETCH_USER_I;
}

export interface FetchUserListI {
    type: constants.FETCH_USER_LIST_I;
}

export interface SetUserI {
    type: constants.SET_USER_I;
    payload: UserI;
}

export interface SetUserListI {
    type: constants.SET_USER_LIST_I;
    payload: UserI[];
}

export type UserActionI = SetUserI | SetUserListI;

export function setUser(payload: UserI): SetUserI {
    return {
        type: constants.SET_USER,
        payload,
    };
}

export function setUserList(payload: UserI[]): SetUserListI {
    return {
        type: constants.SET_USER_LIST,
        payload,
    };
}

type dispatchType = httpActions.HttpActionI | UserActionI;

export function fetchUser(id: number): Dispatch<dispatchType> {
    return (dispatch: Dispatch<dispatchType>): Promise<void> => {
        dispatch(httpActions.isLoading(true));

        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        return httpActions.fetchApi(url)
            .then((response: Response) => {
                return response.json();
            })
            .then(
                // Response
                (result: UserI) => {
                    dispatch(httpActions.httpSuccess(true));
                    dispatch(setUser(result));
                },
                (error: Response) => {
                    dispatch(httpActions.httpError(true));
                },
            );
    };
}

export function fetchUserList(): Dispatch<dispatchType> {
    return (dispatch: Dispatch<dispatchType>): Promise<void> => {
        dispatch(httpActions.isLoading(true));

        const url = 'https://jsonplaceholder.typicode.com/users';
        return httpActions.fetchApi(url)
            .then((response: Response) => {
                return response.json();
            })
            .then(
                (userList: UserI[]) => {
                    dispatch(httpActions.httpSuccess(true));
                    dispatch(setUserList(userList));
                },
                (error: Response) => {
                    dispatch(httpActions.httpError(true));
                },
            );
    };
}