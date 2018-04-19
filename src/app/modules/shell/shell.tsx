import * as React from 'react';
import { Route } from 'react-router-dom';
import { DispatchProp } from 'react-redux';
import { History } from 'history';
import Header from './header';
import SideBar from './sidebar';

import App from '../app/App';
import UserList from '../user/list';
import UserDetail from '../user/detail';

interface PropsI {
    history: History;
}

interface DispatchPropI {
}

class Shell extends React.Component<PropsI & DispatchProp<DispatchPropI>, object> {

    render() {
        const { history } = this.props;
        return (
            <div className="container-fluid">
                <div className="header">
                    <Header history={history} />
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-sm-9">
                        This is dashboard Content section
                        <Route path="/dashboard/app" component={App} />
                        <Route exact={true} path="/dashboard/user" component={UserList} />
                        <Route exact={true} path="/dashboard/user/:id" component={UserDetail} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Shell;