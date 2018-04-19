import * as React from 'react';
import * as actions from './user.actions';
import { IStore } from '../../store/store.interface';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserI } from './user.interface';

interface Props {
    list: UserI[];
    fetchUserList: () => actions.FetchUserListI;
    isLoading: boolean;
    httpSuccess: boolean;
    httpError: boolean;
}

class UserList extends React.Component<Props, object> {
    fetchUserList() {
        const { fetchUserList } = this.props;
        fetchUserList();
    }

    render() {
        const { list, isLoading, httpSuccess, httpError } = this.props;
        return (
            <div>
                Api is loading = {isLoading ? 'true' : 'false'}<br />
                Http Error = {httpError ? 'true' : 'false'}<br />
                Http Success = {httpSuccess ? 'true' : 'false'}<br />
                <ul>
                    {list.map((user: UserI, index: number) => {
                        return (
                            <li key={index}>
                                <Link to={`/dashboard/user/${user.id}`}>{user.name}, </Link>
                                <span>{user.email}, </span>
                                <span>{user.phone}, </span>
                                <span>{user.username}</span>
                            </li>
                        );
                    })}
                </ul>
                <a
                    onClick={() => this.fetchUserList()}
                    className="btn btn-success"
                >
                    Get more users
                </a>
            </div>
        );
    }
}

function mapStateToProps(store: IStore) {
    return {
        list: store.user.list,
        isLoading: store.http.isLoading,
        httpSuccess: store.http.httpSuccess,
        httpError: store.http.httpError,
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.UserActionI>) {
    return {
        fetchUserList: () => dispatch(actions.fetchUserList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
// export default UserList;