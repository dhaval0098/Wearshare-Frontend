import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const DeliverySuccess = () => {
  const [latestSchedule, setLatestSchedule] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/getschedules');
        const schedules = response.data.data;

        // Assuming you want to show the latest schedule (most recent)
        if (schedules.length > 0) {
          const latest = schedules[schedules.length - 1];
          setLatestSchedule(latest);
        }
      } catch (error) {
        console.error("Failed to fetch schedules", error);
      }
    };

    fetchSchedules();
  }, []);

  if (!latestSchedule) {
    return <div className="text-center mt-5">Loading schedule details...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="alert alert-success text-center fs-5">
        🎉 Delivery Scheduled Successfully!
      </div>
      <div className="card shadow p-4">
        <h4 className="card-title mb-3">Delivery Details</h4>
        <p><strong>User Name:</strong> {latestSchedule.UserName}</p>
        <p><strong>Name:</strong> {latestSchedule.name}</p>
        <p><strong>Phone:</strong> {latestSchedule.phone}</p>
        <p><strong>Email:</strong> {latestSchedule.email}</p>
        <p><strong>Date:</strong> {latestSchedule.date}</p>
        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/delivery/deliveryitems")}
        >
          Back to Delivery Items
        </button>
      </div>
    </div>
  );
};
