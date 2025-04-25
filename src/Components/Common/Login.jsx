import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submithandler = async (data) => {
    try {
      const res = await axios.post("/loginu", data);

      if (res.status === 201) {
        toast.success("Login successful! 🚀");

        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("Role", res.data.data.RoleId.Role);

        const role = res.data.data.RoleId.Role;

        setTimeout(() => {
          if (role === "USER") {
            navigate("/user/dashboard");
          } else if (role === "NGO") {
            navigate("/NGO/NGOdashboard");
          } else if (role === "Delievry") {
            navigate("/delivery/deliverydashbord");
          } else {
            toast.error("Unknown role");
          }
        }, 1500); // Wait 1.5 sec before redirect to show the toast
      } else {
        
      }
    } catch (err) {
      toast.error("Something went wrong. Check your credentials.");
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100 text-white position-relative"
      style={{
        background: "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer position="top-center" autoClose={2000} />

      {/* Background Text */}
      <div className="position-absolute text-center w-75 top-0 start-50 translate-middle-x mt-5">
        <h1 className="fw-bold text-warning">Donate Clothes, Share Warmth</h1>
        <p className="lead text-light">Your unused clothes can bring comfort to someone in need. Make a difference today.</p>
      </div>

      <div className="card shadow-lg p-4 text-white" 
        style={{ 
          width: "350px", 
          background: "rgba(0, 0, 0, 0.5)", 
          backdropFilter: "blur(10px)", 
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }}
      >
        <h2 className="text-center text-warning fw-bold">Wear Share</h2>
        <form onSubmit={handleSubmit(submithandler)}>
          <div className="mb-3">
            <label className="form-label fw-bold text-light">Email</label>
            <input type="text" placeholder="Enter email" 
              className="form-control border-0 shadow-sm text-white"
              {...register("email", { required: "Email is required" })}
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
            {errors.email && <span className="text-warning small">{errors.email.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-light">Password</label>
            <input type="password" placeholder="Enter password" 
              className="form-control border-0 shadow-sm text-white"
              {...register("password", { required: "Password is required", minLength: 8 })}
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
            {errors.password && <span className="text-warning small">{errors.password.message}</span>}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-warning fw-bold text-dark shadow-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
