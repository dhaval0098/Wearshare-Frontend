import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DeliverySidebar } from "./DeliverySidebar";

export default function DeliveryDashboard() {
  return (
    <>
      <div
        style={{
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div className="container-fluid px-4 py-3">
          <div className="row">
            {/* Sidebar can be rendered here if needed */}
            {/* <DeliverySidebar /> */}

            <div className="offset-md-1 offset-lg-1 col-md-10 col-lg-10">
              <h2
                className="text-center mb-5"
                style={{ color: "#2c3e50", fontWeight: "600" }}
              >
                Delivery Person Dashboard
              </h2>

              <div className="row g-4">
                <div className="col-md-4">
                  <div
                    className="card h-100"
                    style={{ backgroundColor: "#3498db", color: "white" }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#2980b9" }}
                    >
                      Assigned Deliveries
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">5</h5>
                      <p className="card-text">
                        Deliveries to be completed today.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card h-100"
                    style={{ backgroundColor: "#2ecc71", color: "white" }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#27ae60" }}
                    >
                      Completed Deliveries
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">12</h5>
                      <p className="card-text">
                        Total deliveries completed this week.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100" style={{ backgroundColor: "#f8f9fa" }}>
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#bdc3c7" }}
                    >
                      Your Profile
                    </div>
                    <div className="card-body">
                      <p>
                        <strong>Name:</strong> John Doe
                      </p>
                      <p>
                        <strong>ID:</strong> DP1023
                      </p>
                      <p>
                        <strong>Contact:</strong> +1234567890
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Table */}
              <div className="card mt-5">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#34495e", color: "white" }}
                >
                  Today's Delivery Schedule
                </div>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead style={{ backgroundColor: "#ecf0f1" }}>
                      <tr>
                        <th>#</th>
                        <th>Donor Name</th>
                        <th>Address</th>
                        <th>Time Slot</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Alice Smith</td>
                        <td>123 Green St, Springfield</td>
                        <td>10:00 AM - 11:00 AM</td>
                        <td>
                          <span className="badge bg-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Bob Johnson</td>
                        <td>456 Elm St, Shelbyville</td>
                        <td>12:00 PM - 01:00 PM</td>
                        <td>
                          <span className="badge bg-success">Completed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
