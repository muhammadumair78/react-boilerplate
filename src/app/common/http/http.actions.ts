import * as constants from './http.constants';

interface IsLoadingI {
    type: constants.IS_LOADING_I;
    payload: boolean;
}

interface HttpSuccessI {
    type: constants.HTTP_SUCCESS_I;
    payload: boolean;
}

interface HttpErrorI {
    type: constants.HTTP_ERROR_I;
    payload: boolean;
}

interface UnAuthorizedI {
    type: constants.UN_AUTHORIZED_I;
    payload: boolean;
}

export type HttpActionI = IsLoadingI | HttpSuccessI | HttpErrorI | UnAuthorizedI;

export function isLoading(payload: boolean): IsLoadingI {
    return {
        type: constants.IS_LOADING,
        payload,
    };
}

export function httpSuccess(payload: boolean): HttpSuccessI {
    return {
        type: constants.HTTP_SUCCESS,
        payload,
    };
}

export function httpError(payload: boolean): HttpErrorI {
    return {
        type: constants.HTTP_ERROR,
        payload,
    };
}

export function unAuthorized(payload: boolean): UnAuthorizedI {
    return {
        type: constants.UN_AUTHORIZED,
        payload,
    };
}

export function fetchApi(url: string): Promise<Response> {
    return fetch(url)
        .then((response: Response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        });
}