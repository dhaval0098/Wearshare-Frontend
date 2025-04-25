import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeliverySidebar } from './DeliverySidebar';

export const DeliveryProof = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submithandler = async (data) => {
    try {
      const DeliveryId = localStorage.getItem('id');
      const roleId = localStorage.getItem('Role');
      data.DeliveryId = DeliveryId;
      data.RoleId = roleId;

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('image', data.image[0]);

      const res = await axios.post('/proof', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Response:', res.data);

      if (res.data.imageURL) {
        toast.success("Proof uploaded successfully! 📸");
        reset();
        // Optionally refresh data here if needed
        // allitems();
      }
    } catch (error) {
      console.error('Error submitting items:', error);
      toast.error("Failed to upload proof. Try again.");
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className='container shadow-lg rounded' style={{ backgroundColor: '#f8f9fa', border: '2px solid #6c757d' }}>
        <form onSubmit={handleSubmit(submithandler)} className='p-4'>
          <h2 className='text-center mb-4' style={{ color: '#5A189A' }}>Upload Proof</h2>

          <input type='hidden' {...register('RoleId')} value={localStorage.getItem('Role') || ''} />
          <input type='hidden' {...register('UserId')} value={localStorage.getItem('id') || ''} />

          <div className='row'>
            <div className='col-md-6 offset-md-3 mb-3'>
              <label className='form-label fw-bold text-dark'>Name</label>
              <input type='text' placeholder='Your Name' className='form-control border-primary' {...register('name')} />
            </div>

            <div className='col-md-6 offset-md-3 mb-3'>
              <label className='form-label fw-bold text-dark'>Phone</label>
              <input type='text' placeholder='Your Phone' className='form-control border-primary' {...register('phone')} />
            </div>

            <div className='col-md-6 offset-md-3 mb-3'>
              <label className='form-label fw-bold text-dark'>Email</label>
              <input type='email' placeholder='Your Email' className='form-control border-primary' {...register('email')} />
            </div>

            <div className='col-md-6 offset-md-3 mb-4'>
              <label className='form-label fw-bold text-dark'>Upload Image</label>
              <input type='file' className='form-control border-primary' {...register('image')} />
            </div>

            <div className='text-center'>
              <button className='btn' style={{ backgroundColor: '#5A189A', color: 'white', padding: '10px 20px' }} type='submit'>
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
