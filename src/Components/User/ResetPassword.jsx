import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'

export const ResetPassword = () => {
 const token = useParams().token;
const {register,handleSubmit}= useForm()
 const submithandler = async(data)=>{
    const obj ={
        token : token,
        password: data.password
    }
    const res = await axios.post("resetpassword",obj)
    console.log(res.data);
    
 }

  return (
    <div> 
        <h1>RESET PASSWORD</h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
            <label>enter new password </label>
            <input type='password'{...register("password")}></input>
            </div>
            <div>
            <input type='submit'></input>
            </div>
        </form>


    </div>
  )
}
