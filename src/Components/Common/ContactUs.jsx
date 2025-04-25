
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Contact Us</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              We usually respond within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
