import { HttpActionI } from './http.actions';
import { IS_LOADING, HTTP_ERROR, HTTP_SUCCESS, UN_AUTHORIZED } from './http.constants';

export interface HttpI {
    httpSuccess: boolean;
    isLoading: boolean;
    httpError: boolean;
    unAuthorized: boolean;
}

const initialState: HttpI = {
    httpSuccess: false,
    isLoading: false,
    httpError: false,
    unAuthorized: true,
};

export function http(state: HttpI = initialState, action: HttpActionI): HttpI {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
                httpSuccess: false,
                httpError: false,
            };
        case HTTP_SUCCESS:
            return {
                ...state,
                httpSuccess: action.payload,
                isLoading: false,
            };
        case HTTP_ERROR:
            return {
                ...state,
                httpError: action.payload,
                isLoading: false,
            };
        case UN_AUTHORIZED:
            return { ...state, unAuthorized: action.payload };
        default:
            return state;
    }
}