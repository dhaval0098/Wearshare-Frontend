// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Login } from './Components/Login'
// import { Signup } from './Components/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Sidebar } from './Components/User/Sidebar'
import {Navbar} from './Components/User/Navbar'
import { Signup } from './Components/Common/Signup'
import {Login} from './Components/Common/Login'
import { UpdateItems } from './Components/Ngo/UpdateItems'
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import axios from 'axios'
import { useEffect } from 'react'
import PrivateRoutes from './Hooks/PrivateRoutes'
import { Landing } from './Components/Common/Landing'
import { ViewItems } from './Components/Common/ViewItems'
import { ResetPassword } from './Components/User/ResetPassword'
import {NGOsignup} from "./Components/Ngo/NGOsignup"
import Dashboard from './Components/User/Dashboard'
import NGOsidebar from "./Components/Ngo/NGOsidebar"
import { DeliverySignup } from './Components/Delivery/DeliverySignup'
import { DeliverySidebar } from './Components/Delivery/DeliverySidebar'
import { DeliverySchedule} from './Components/Delivery/DeliverySchedule'
import { DeliveryProof } from './Components/Delivery/DeliveryProof'
import { DeliveryItems } from './Components/Delivery/DeliveryItems'
// import { View } from './Components/Delivery/View'
import DeliveryDashboard from './Components/Delivery/DeliveryDashbord'
import Status from './Components/Common/Status'
import NGOnavbar from './Components/Ngo/NGOnavbar'
import { DeliverySuccess } from './Components/Delivery/DeliverySuccess'
import ForgotPassword from "./Components/User/ForgotPassword"
import NGODashboard from './Components/Ngo/NGODashboard'
import ContactUs from './Components/Common/ContactUs'
import { NGOItems } from './Components/Ngo/NGOItems'
// import DeliveryNavbar from './Components/Delivery/DeliveryNavbar'
import { Delievrynavbar } from './Components/Delivery/DeliveryNavbar'
import { ViewProof } from './Components/Common/ViewProof'


// import { Navbar } from './Components/Navbar'

function App() {
  axios.defaults.baseURL = "http://localhost:6009"
    
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);
  return (
    <>
    <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
    
      {/* <Navbar></Navbar> */}
       <Routes>

       
       
       <Route path='/status'element={<Status/>}></Route>
       
       
       
        <Route path='/delivery'element={<DeliverySidebar/>}>
        <Route path='deliverydashbord'element={<DeliveryDashboard/>}></Route>
        <Route path='viewproof'element={<ViewProof/>}></Route>
        <Route path='contactus'element={<ContactUs/>}></Route>
        <Route path='deliveryitems'element={<DeliveryItems/>}></Route>
        <Route path='deliveryschedule/:id'element={<DeliverySchedule/>}></Route>
        <Route path='deliverysuccess'element={<DeliverySuccess/>}></Route>
        <Route path='items'element={<UpdateItems/>}></Route>
        {/* <Route path='deliverynavbar'element={<DeliveryNavbar/>}></Route> */}
        
        </Route>
        
        <Route path='/deliverysignup'element={<DeliverySignup/>}></Route>
        <Route path='/NGOsidebar'element={<NGOsidebar/>}></Route>
        
       {/* <Route path='/userdashboard'element={<Dashboard/>}></Route> */}
        <Route path='/NGOsignUP'element={<NGOsignup/>}></Route>
        
        
       <Route path='/signup'element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgotpassword'element={<ForgotPassword/>}></Route>
        <Route path='/resetpassword/:token'element={<ResetPassword/>}></Route>
        <Route path='/'element={<Landing/>}></Route>
        
        
        {/* <Route element={<PrivateRoutes/>}> */}
         <Route path='/user'element={<Sidebar/>}>
         <Route path='dashboard'element={<Dashboard/>}></Route>
         <Route path='items'element={<UpdateItems/>}></Route>
         <Route path='contactus'element={<ContactUs/>}></Route>
         <Route path='viewproof'element={<ViewProof/>}></Route>
         <Route path='view'element={<ViewItems/>}></Route>
         </Route>
         <Route path='/NGO'element={<NGOsidebar/>}>
         <Route path='NGOdashboard'element={<NGODashboard/>}></Route>
         <Route path='NGOitems'element={<NGOItems/>}></Route>
         <Route path='items'element={<UpdateItems/>}></Route>
         <Route path='deliveryproof'element={<DeliveryProof/>}></Route>
         <Route path='viewproof'element={<ViewProof/>}></Route>
         <Route path='contactus'element={<ContactUs/>}></Route>
         
         {/* </Route> */}
         </Route>
         
         
       </Routes>
     
       </div>

    </>

  )
}
export default App