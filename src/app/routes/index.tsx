import * as React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';

import Loader from '../common/loader';
import Shell from '../modules/shell/shell';
import Auth from '../modules/auth/auth';

class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <div id="main_wrapper" className="main-wrapper">
                    <Loader />
                    <Route path="/auth" component={Auth} />
                    <Route
                        exact={true}
                        path="/"
                        render={props =>
                            localStorage.getItem('token') ? (
                                <Redirect to="/dashboard" />
                            ) : (
                                <Redirect to="/auth/login" />
                            )
                        }
                    />
                    <Route path="/dashboard" component={Shell} />
                </div>
            </Switch>
        );
    }
}

export default AppRoutes;
