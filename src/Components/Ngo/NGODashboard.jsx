import React from 'react';

const NGODashboard = () => {
  return (
    <div className="container bg-light text-white p-4 rounded">
      <h2 className="text-center mb-4"style={{color:"black"}}>NGO Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Donations</h5>
              <p className="card-text display-6">124</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-success text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending Pickups</h5>
              <p className="card-text display-6">18</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-warning text-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">Completed Deliveries</h5>
              <p className="card-text display-6">106</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 bg-secondary text-white">
        <div className="card-header">
          Recent Donations
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">John Doe - 5 Bags of Clothes - Mumbai</li>
          <li className="list-group-item bg-dark text-white">Priya Sharma - 3 Sarees - Delhi</li>
          <li className="list-group-item bg-dark text-white">Rahul Kumar - 10 T-Shirts - Bangalore</li>
        </ul>
      </div>

      <div className="card mt-4 bg-secondary text-white">
        <div className="card-header">
          Volunteers Assigned
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">Anita Verma - Mumbai</li>
          <li className="list-group-item bg-dark text-white">Vikram Singh - Delhi</li>
          <li className="list-group-item bg-dark text-white">Sneha Joshi - Bangalore</li>
        </ul>
      </div>
    </div>
  );
};

export default NGODashboard;
