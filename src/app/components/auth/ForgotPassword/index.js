import React from 'react';
import AuthShell from '../AuthShell';

export default function () {
    return (
      <AuthShell>
        <div class="p-5">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
            <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
          </div>
          <form class="user">
            <div class="form-group">
              <input type="email" class="form-control form-control-user" placeholder="Enter Email Address..." />
               </div>
            <a href="login.html" class="btn btn-primary btn-user btn-block">
              Reset Password
            </a>
          </form>
          <hr />
          <div class="text-center">
            <a class="small" href="register.html">Create an Account!</a>
          </div>
          <div class="text-center">
            <a class="small" href="login.html">Already have an account? Login!</a>
           </div>
        </div>
      </AuthShell>
    );
}