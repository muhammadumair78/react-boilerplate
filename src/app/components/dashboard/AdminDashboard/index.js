import React from 'react';
import AppShell from '../../shell/AppShell';
import { Link } from 'react-router-dom';
import { routesUrl } from '../../../constants';

export default function () {
    return (
      <AppShell>
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
            <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
          </div>
          <form className="user">
            <div className="form-group">
              <input type="email" className="form-control form-control-user" placeholder="Enter Email Address..." />
               </div>
            <a href="login.html" className="btn btn-primary btn-user btn-block">
              Reset Password
            </a>
          </form>
          <hr />
          <div className="text-center">
            <Link className="small" to={routesUrl.FORGOT_PASSWORD}>
              Create an Account!
            </Link>
          </div>
          <div className="text-center">
            <Link className="small" to={routesUrl.LOGIN}>
              Already have an account? Login!
            </Link>
           </div>
        </div>
      </AppShell>
    );
}