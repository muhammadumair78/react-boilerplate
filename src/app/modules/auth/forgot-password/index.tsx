import * as React from 'react';
import { DispatchProp } from 'react-redux';
import { Link } from 'react-router-dom';
import { History } from 'history';

interface PropsI {
    history: History;
}

interface DispatchPropI {
}

class ForgotPassword extends React.Component<PropsI & DispatchProp<DispatchPropI>, object> {
    login() {
        const { history } = this.props;
        history.push('/app');
    }

    render() {
        return (
            <div>
                <form>
                    <h2 className="form-signin-heading">Forgot Password?</h2>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    </div>
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={() => this.login()}
                    >
                        Send
                    </button>
                </form>
                <Link to="/auth/login">Login</Link>
            </div>
        );
    }
}

export default ForgotPassword;