import { EnthusiasmI } from '../common/hello/hello.reducer';
import { UserStoreI } from '../modules/user/user.reducer';
import { HttpI } from '../common/http/http.reducer';

export interface IStore {
    http: HttpI;
    enthusiasm: EnthusiasmI;
    user: UserStoreI;
}