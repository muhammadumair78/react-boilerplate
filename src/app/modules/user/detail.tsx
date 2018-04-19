import * as React from 'react';
import * as actions from './user.actions';
import { IStore } from '../../store/store.interface';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserI } from './user.interface';
import { match as Match } from 'react-router';

interface RouteParams {
    id: number;
}

interface Props {
    user: UserI;
    match: Match<RouteParams>;
    fetchUser: (id: number) => actions.FetchUserI;
}

class UserList extends React.Component<Props, object> {
    componentDidMount() {
        const { fetchUser, match } = this.props;
        fetchUser(match.params.id);
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                This is a user detail page<br />
                <div>
                    { user ? (
                        <div>
                            User Name is = {user.name}<br />
                            User Phone is = {user.phone}<br />
                            User Email is = {user.email}<br />
                            User Username is = {user.username}<br />
                            User Website is = {user.website}<br />
                        </div>
                    ) : null }
                </div>
                <Link to="/dashboard/user">Go Back</Link>
            </div>
        );
    }
}

function mapStateToProps(store: IStore) {
    return {
        user: store.user.selectedUser,
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.UserActionI>) {
    return {
        fetchUser: (id: number) => dispatch(actions.fetchUser(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
