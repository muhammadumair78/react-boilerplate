import React, { useState } from 'react';
import AuthShell from '../AuthShell';
import { Link } from 'react-router-dom';
import { routesUrl } from '../../../constants';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fetchAPI } from '../../../helpers/fetchAPI';
import { history } from '../../../history';
import { useLocalStorage } from '../../../hooks/localStorage';

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [_, setToken] = useLocalStorage('token', '');

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  const handleSubmit = (fields) => {
    setIsLoading(true);
    fetchAPI('todos/1', 'GET', null, true)
      .then((response) => {
        setIsLoading(false);
        return response;
      })
      .then(response => {
        setToken(response);
        history.push(routesUrl.USER_DASHBOARD);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <AuthShell>
      <div className="p-5">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          render={({ errors, status, touched }) => (
            <Form className="user was-validated">
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  className="form-control form-control-user"
                  placeholder="Enter Email Address..."
                  autoFocus />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  className="form-control form-control-user"
                  placeholder="Password" />
                <ErrorMessage name="Password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox small">
                  <input type="checkbox" className="custom-control-input" id="customCheck" />
                  <label className="custom-control-label">Remember Me</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isLoading}>
                Login
              </button>
              <hr />
            </Form>
          )}
        />
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