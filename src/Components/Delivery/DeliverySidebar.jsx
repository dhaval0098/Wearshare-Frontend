import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Dashboard from '../User/Dashboard'
import { Delievrynavbar } from './DeliveryNavbar'
import { DeliverySchedule } from './DeliverySchedule'
import { Navbar } from '../User/Navbar'

export const DeliverySidebar = () => {
    
   
   
     return (
       <>
                  <Navbar></Navbar>
                  {/* <Dashboard></Dashboard> */}
                  <aside
                      className="app-sidebar bg-body-secondary shadow"
                      data-bs-theme="dark"
                  >
                      <div className="sidebar-brand">
                          {/*begin::Brand Link*/}
                          <a href="./index.html" className="brand-link">
                              {/*begin::Brand Image*/}
                             
                              {/*end::Brand Image*/}
                              {/*begin::Brand Text*/}
                              <span className="brand-text fw-light" style={{fontFamily:"forte"}}>Wear Share</span>
                              {/*end::Brand Text*/}
                          </a>
                          {/*end::Brand Link*/}
                      </div>
      
                      <div
                          className=""
                          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
                          tabIndex={-1}
                          style={{
                              marginRight: "-16px",
                              marginBottom: "-16px",
                              marginLeft: 0,
                              top: "-8px",
                              right: "auto",
                              left: "-8px",
                              width: "calc(100% + 16px)",
                              padding: 8,
                          }}
                      >
                          <nav className="mt-2">
                              {/*begin::Sidebar Menu*/}
                              <ul
                                  className="nav sidebar-menu flex-column"
                                  data-lte-toggle="treeview"
                                  role="menu"
                                  data-accordion="false"
                              >
                                  <li className="nav-item menu-open">
                                     <Link to ="deliveryitems"className="nav-link ">view items</Link>
                                      <ul className="nav nav-treeview">
                                          <li className="nav-item">
                                              <Link to ="items"className="nav-link ">update items</Link>
                                          </li>
                                          <li className="nav-item">
                                              <Link to ="viewproof"className="nav-link ">proofs</Link>
                                          </li>
                                         
                                      </ul>
                                  </li>
                              </ul>
                              {/*end::Sidebar Menu*/}
                          </nav>
                      </div>
                  </aside>
                  <main className='app-main'>
                      <Outlet />
                      {/* <Dashboard></Dashboard> */}
                  </main>
              </>
     );
   };
   