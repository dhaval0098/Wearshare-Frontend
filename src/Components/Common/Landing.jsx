import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="container-fluid p-0 m-0" style={{ overflowX: "hidden" }}>
      
      {/* Hero Section */}
      <section 
        className="text-center text-white d-flex flex-column align-items-center justify-content-center vh-100"
        style={{ 
          backgroundColor: "#5A189A",
          backgroundImage: "linear-gradient(to right, #9D4EDD, #5A189A)",
          width: "100vw",
          height: "100vh",
          margin: 0,
          overflowX: "hidden"
        }}
      >
        {/* wearshare heading */}
        <h1 
          style={{ 
            fontFamily: "Forte, cursive", 
            color: "white", 
            fontSize: "4rem", 
            // marginBottom: "1rem" 
          }}
        >
          wearshare
        </h1>

        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="display-4 fw-bold">The Cloth Donation Platform</h1>
          <p className="lead">Connecting donors with NGOs and individuals in need of clothing.</p>
          <Link to="/signup" className="btn btn-warning btn-lg mt-3">Start Donating</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5 text-center">
        <h2 className="text-dark mb-4">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4 shadow-lg" style={{ backgroundColor: "#F72585", color: "white" }}>
              <h5>Seamless Donations</h5>
              <p>Easily list, categorize, and schedule pickups for your donated clothes.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-lg" style={{ backgroundColor: "#7209B7", color: "white" }}>
              <h5>Connect with NGOs</h5>
              <p>Verified NGOs and individuals can request items based on their needs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-lg" style={{ backgroundColor: "#3A0CA3", color: "white" }}>
              <h5>Impact Lives</h5>
              <p>Your unused clothes can bring comfort and dignity to those in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 text-center" style={{ backgroundColor: "#4CC9F0" }}>
        <h2 className="text-dark mb-4">How It Works</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-4 shadow-lg" style={{ backgroundColor: "#4361EE", color: "white" }}>
                <h5>1. List Your Donation</h5>
                <p>Upload details about your clothing donations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow-lg" style={{ backgroundColor: "#4895EF", color: "white" }}>
                <h5>2. NGOs Browse & Request</h5>
                <p>Verified recipients can browse and request what they need.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow-lg" style={{ backgroundColor: "#560BAD", color: "white" }}>
                <h5>3. Schedule Pickup</h5>
                <p>Choose a pickup time for hassle-free collection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-5 text-center">
        <h2 className="text-dark mb-4">What Our Users Say</h2>
        <blockquote className="blockquote text-dark mx-auto w-75">
          <p className="mb-4">“The E-Cloth Donation platform made it so easy for me to donate my unused clothes. I love knowing they are going to those who truly need them.”</p>
          <footer className="blockquote-footer">Jane Doe, Donor</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center py-4" style={{ backgroundColor: "#F72585", color: "white" }}>
        <h2 className="text-light">Start Making a Difference Today!</h2>
        <a href="#" className="btn btn-light btn-lg mt-3">Join Now</a>
      </section>
    </div>
  );
};
