import React from 'react';
import AuthShell from '../AuthShell';
import { Link } from 'react-router-dom';
import { routesUrl } from '../../../constants';

export default function () {
    return (
      <AuthShell>
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
          </div>
          <form className="user">
            <div className="form-group">
              <input type="email" className="form-control form-control-user" placeholder="Enter Email Address..." />
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-user" placeholder="Password" />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox small">
                <input type="checkbox" className="custom-control-input" id="customCheck" />
                <label className="custom-control-label">Remember Me</label>
              </div>
            </div>
            <a href="index.html" className="btn btn-primary btn-user btn-block">
              Login
            </a>
            <hr />
          </form>
          <hr />
          <div className="text-center">
            <Link className="small" to={routesUrl.FORGOT_PASSWORD}>
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link className="small" to={routesUrl.USER_DASHBOARD}>
              Create an Account!
            </Link>
          </div>
        </div>
      </AuthShell>
    );
}