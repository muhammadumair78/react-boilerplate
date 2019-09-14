import React from 'react';
import AppSidebar from '../AppSidebar';
import AppHeader from '../AppHeader';
import AppPageTitle from '../AppPageTitle';
import AppFooter from '../AppFooter';

export default function ({ children }) {
    return (
      <div id="wrapper">
        <AppSidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AppHeader />
            <div className="container-fluid">
              <AppPageTitle />
              { children }
            </div>
          </div>
          <AppFooter />
        </div>
      </div>
    );
}