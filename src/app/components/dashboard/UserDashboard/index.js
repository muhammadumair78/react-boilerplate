import React from 'react';
import AppShell from '../../shell/AppShell';

export default function () {
    return (
      <AppShell>
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
              </div>
              <div className="card-body">
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce CSS bloat and poor page performance. Custom CSS classNamees are used to create custom components and custom utility classNamees.</p>
                <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classNamees.</p>
              </div>
            </div>
          </div>
        </div>
      </AppShell>
    );
}