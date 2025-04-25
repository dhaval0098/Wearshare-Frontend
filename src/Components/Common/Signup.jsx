import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  const [city, setcity] = useState([]);
  const [state, setstate] = useState([]);

  const getstates = async () => {
    const res = await axios.get("/gstate");
    console.log(res);
    setstate(res.data.data);
  };

  useEffect(() => {
    getstates();
  }, []);

  const getCityByState = async (id) => {
    console.log(id);
    const res = await axios.get("/getcitybystate/" + id);
    console.log(res);
    console.log(res.data);
    setcity(res.data.data);
  };

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submithandler = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("/signu", data);
      console.log(res);
      console.log(res.data);

      if (res.status === 201) {
        toast.success("Signup successful!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #0F2027, #203A43, #2C5364)" }}>
      
      <ToastContainer />

      <div className="card text-white shadow-lg p-4 w-50"
        style={{ border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "#1A1A1D" }}>
        
        <h1 className="fw-bold text-warning"
          style={{ fontFamily: "Forte, cursive", fontSize: "50px", textAlign: "center" }}>
          Wear Share
        </h1>

        <div className="card-header text-center" style={{ backgroundColor: " rgba(26,26,29)" }}>
          <h3 className="fw-bold">Signup</h3>
        </div>

        <form className="needs-validation" noValidate="" onSubmit={handleSubmit(submithandler)}>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  {...register("firstname", { required: "First name is required" })}
                />
                <span className="text-danger small">{errors.firstname?.message}</span>
              </div>
              <div className="col-md-6">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  {...register("lastname", { required: "Last name is required" })}
                />
                <span className="text-danger small">{errors.lastname?.message}</span>
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone number</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number"
                    }
                  })}
                />
                <span className="text-danger small">{errors.phone?.message}</span>
              </div>
              <div className="col-md-6">
                <label className="form-label">Role</label>
                <select
                  className="form-select bg-dark text-white border-secondary"
                  {...register("RoleId", { required: "Role is required" })}
                >
                  <option value="">Choose...</option>
                  <option value="67c5b0a24ca78e79fbc030af">USER</option>
                  <option value="67c5b0ac4ca78e79fbc030b1">NGO</option>
                  <option value="67ed2df20de1cc31c9ac262a">DELIVERY</option>
                </select>
                <span className="text-danger small">{errors.RoleId?.message}</span>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select
                  className="form-select bg-dark text-white border-secondary"
                  id="validationCustom04"
                  {...register("stateId", { required: "State is required" })}
                  onChange={(event) => { getCityByState(event.target.value) }}
                >
                  <option value="">select state</option>
                  {state?.map((state, index) => {
                    return <option key={index} value={state._id}>{state.statename}</option>
                  })}
                </select>
                <span className="text-danger small">{errors.stateId?.message}</span>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <select
                  className="form-select bg-dark text-white border-secondary"
                  id="validationCustom04"
                  {...register("cityid", { required: "City is required" })}
                >
                  <option value="">city</option>
                  {city?.map((city, index) => {
                    return <option key={index} value={city.stateId}>{city.name}</option>
                  })}
                </select>
                <span className="text-danger small">{errors.cityid?.message}</span>
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                <span className="text-danger small">{errors.email?.message}</span>
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-secondary"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    }
                  })}
                />
                <span className="text-danger small">{errors.password?.message}</span>
              </div>
            </div>
          </div>
          <div className="card-footer text-center" style={{ backgroundColor: "#2D2D34" }}>
            <button className="btn btn-outline-light w-100 fw-bold" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};
