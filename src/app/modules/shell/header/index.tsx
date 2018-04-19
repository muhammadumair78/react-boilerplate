import * as React from 'react';
import { History } from 'history';

interface Props {
    history: History;
}

class Header extends React.Component<Props, object> {
    logout() {
        localStorage.removeItem('token');
        const { history } = this.props;
        history.push('/auth/login');
    }

    render() {
        return (
            <div className="row">
                <div className="header-wrap">
                    This is header section
                    <a
                        className="float-right pointer"
                        onClick={() => this.logout()}
                    >
                        Logout
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;