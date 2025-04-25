import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DeliverySidebar } from '../Delivery/DeliverySidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeliverySchedule = () => {
  const { id } = useParams(); // item ID from route
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      RoleId: localStorage.getItem('Role') || '',
      deliveryId: id || ''
    }
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`/gitem/${id}`);
        setItem(res.data);
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };

    if (id) fetchItem();
  }, [id]);

  const onsubmit = async (data) => {
    try {
      const response = await axios.post('/addschedule', data);
      
      toast.success("Delivery scheduled successfully! 🚚");

      setTimeout(() => {
        navigate("/delivery/deliverysuccess", { state: data });
      }, 1500); // Slight delay to allow toast to show
    } catch (err) {
      toast.error("Failed to schedule delivery. Please try again.");
      console.error("Error scheduling delivery:", err);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center py-4 gap-4">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="flex-grow-1" style={{ maxWidth: '600px' }}>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="shadow-lg rounded p-4"
          style={{
            backgroundColor: '#f8f9fa',
            border: '2px solid #6c757d',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#5A189A' }}>
            Schedule Delivery
          </h2>

          <input type="hidden" {...register('RoleId')} />
          <input type="hidden" {...register('deliveryId')} />

          {item && (
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">User Name</label>
              <input
                type="text"
                className="form-control border-primary"
                value={item.name}
                readOnly
                {...register('UserName', { required: 'Name is required' })}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-bold text-dark">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className={`form-control ${errors.name ? 'is-invalid' : 'border-primary'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-dark">Phone</label>
            <input
              type="tel"
              placeholder="Your phone"
              className={`form-control ${errors.phone ? 'is-invalid' : 'border-primary'}`}
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: 'Invalid phone number'
                }
              })}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-dark">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className={`form-control ${errors.email ? 'is-invalid' : 'border-primary'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold text-dark">Date</label>
            <input
              type="date"
              className={`form-control ${errors.date ? 'is-invalid' : 'border-primary'}`}
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && <div className="invalid-feedback">{errors.date.message}</div>}
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary"
              style={{ padding: '10px 20px' }}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
