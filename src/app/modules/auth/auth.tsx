import * as React from 'react';
import { Route } from 'react-router-dom';
import Login from './login';
import ForgotPassword from './forgot-password';

class Auth extends React.Component {
    render() {
        return (
            <div className="auth-form">
                This is auth page
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/forgot-password" component={ForgotPassword} />
            </div>
        );
    }
}

export default Auth;