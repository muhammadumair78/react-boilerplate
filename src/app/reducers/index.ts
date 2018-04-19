import { enthusiasm } from '../common/hello/hello.reducer';
import { user } from '../modules/user/user.reducer';
import { http } from '../common/http/http.reducer';

export const allReducers = {
    http,
    enthusiasm,
    user,
};