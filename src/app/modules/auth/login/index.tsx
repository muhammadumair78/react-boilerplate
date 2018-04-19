import * as React from 'react';
import { DispatchProp } from 'react-redux';
import { Link } from 'react-router-dom';
import { History } from 'history';

interface PropsI {
    history: History;
}

interface DispatchPropI {
}

class Login extends React.Component<PropsI & DispatchProp<DispatchPropI>, object> {
    login() {
        localStorage.setItem('token', 'IAmADumbToken');
        const { history } = this.props;
        history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <form>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={() => this.login()}
                    >
                        Sign in
                    </button>
                </form>
                <Link to="/auth/forgot-password">Forgot Password</Link>
            </div>
        );
    }
}

export default Login;