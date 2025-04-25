import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UpdateItems = () => {
  const [imageURL, setimageURL] = useState('');
  const [Items, setItems] = useState([]);
  const [id, setid] = useState()
  const [NGO, setNGO] = useState()
  const [count, setcount] = useState(0)
  function INCcount() {
          setcount(count+1)
          console.log("count",count);
          
  }
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    allitems();
  }, []);
  

  const allitems = async () => {
    try {
      const res = await axios.get('/gitem');
      setItems(res.data);
      console.log('Fetched items:', res.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
    
  };

  const submithandler = async (data) => {
    try {
     
      const userId = localStorage.getItem('id');
      const roleId = localStorage.getItem('Role'); // Retrieve RoleId from localStorage
      data.userId = userId;
      data.RoleId = roleId;
      
      

      console.log('Data Submitted:', data);

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('userId',data.userId);
      formData.append('catagory', data.catagory);
      formData.append('size', data.size);
      formData.append('gender', data.gender);
      formData.append('image', data.image[0]);
      formData.append('RoleId', roleId);

      const res = await axios.post('/fitem', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Response:', res.data);

      if (res.data.imageURL) {
        setimageURL(res.data.imageURL);
        toast.success("Item Updated Successfully");
      }
      reset();
      allitems();
    } catch (error) {
      console.error('Error submitting items:', error);
      toast.error("Error Submitting...");
    }
  };

  return (
    <div className='container shadow-lg rounded' style={{ backgroundColor: '#f8f9fa', border: '2px solid #6c757d' }}>
      <form onSubmit={handleSubmit(submithandler)} className='p-4'>
        <h2 className='text-center mb-4' style={{ color: '#5A189A' }}>Update Items</h2>
        <ToastContainer position="top-center" autoClose={2000} />
        
        
        <input type='hidden' {...register('RoleId')} value={localStorage.getItem('Role') || ''} />
        <input type='hidden' {...register('UserId')} value={localStorage.getItem('id') || ''} />
        
        <div className='row'>
          <div className='col-md-6 offset-md-3 mb-3'>
            <label className='form-label fw-bold text-dark'>Name</label>
            <input type='text' placeholder='Your Name' className='form-control border-primary' {...register('name')} />
          </div>
          
          <div className='col-md-6 offset-md-3 mb-3'>
            <label className='form-label fw-bold text-dark'>Gender</label>
            <select className='form-select border-primary' {...register('gender')}>
              <option selected disabled>Choose...</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>

          <div className='col-md-6 offset-md-3 mb-3'>
            <label className='form-label fw-bold text-dark'>Category</label>
            <select className='form-select border-primary' {...register('catagory')}>
              <option selected disabled>Choose...</option>
              <option value='pant'>Pant</option>
              <option value='shirt'>Shirt</option>
              <option value='treck'>Trek</option>
              <option value='tshirt'>T-shirt</option>
              <option value='dress'>Dress</option>
              <option value='saree'>Saree</option>
            </select>
          </div>

          <div className='col-md-6 offset-md-3 mb-3'>
            <label className='form-label fw-bold text-dark'>Size</label>
            <select className='form-select border-primary' {...register('size')}>
              <option selected disabled>Choose...</option>
              <option value='xs'>XS</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
              <option value='xl'>XL</option>
              <option value='xxl'>XXL</option>
              <option value='xxxl'>XXXL</option>
            </select>
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
  );
};
