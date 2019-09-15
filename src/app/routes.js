import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
import { routesUrl } from './constants';

import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import UserDashboard from './components/dashboard/UserDashboard';

export default function () {
    return (
        <Router history={history}>
            <Switch key="appRoutes">
                <Route path={routesUrl.LOGIN} component={Login} />
                <Route path={routesUrl.FORGOT_PASSWORD} component={ForgotPassword} />
                <Route path={routesUrl.USER_DASHBOARD} component={UserDashboard} />
            </Switch>
        </Router>
    )
};
