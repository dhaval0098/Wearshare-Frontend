import React from 'react';

const Dashboard = () => {
 
  return (
    <div className="container py-4">
      <h2 className="mb-5 text-center">Clothing Donation Dashboard</h2>

      {/* Summary Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card text-white bg-primary h-100">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title">Total Donations</h5>
              <p className="display-6 mb-0">256</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success h-100">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title">Donors</h5>
              <p className="display-6 mb-0">103</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-dark bg-warning h-100">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title">Pending Pickups</h5>
              <p className="display-6 mb-0">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Donations Table */}
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Recent Donations</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead className="table-light">
                <tr>
                  <th>Donor Name</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jane Doe</td>
                  <td>Winter Jackets</td>
                  <td>5</td>
                  <td>April 1, 2025</td>
                  <td><span className="badge bg-success">Collected</span></td>
                </tr>
                <tr>
                  <td>John Smith</td>
                  <td>T-Shirts</td>
                  <td>10</td>
                  <td>April 3, 2025</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                </tr>
                <tr>
                  <td>Lisa Ray</td>
                  <td>Blankets</td>
                  <td>3</td>
                  <td>April 5, 2025</td>
                  <td><span className="badge bg-success">Collected</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
