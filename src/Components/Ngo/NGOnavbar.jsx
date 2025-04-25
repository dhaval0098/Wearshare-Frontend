import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";

const NGOnavbar = () => {
  const handleLogoutClick = () => {
    localStorage.clear();
    Navigate('/login');
  };

  return (
    <nav className="app-header navbar navbar-expand bg-body">
            {/*begin::Container*/}
            <div className="container-fluid">
                {/*begin::Start Navbar Links*/}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-lte-toggle="sidebar"
                            href="#"
                            role="button"
                        >
                            <i className="bi bi-list" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="#" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="#" className="nav-link">
                            Contact
                        </a>
                    </li>
                    <button onClick={handleLogoutClick} className='btn btn-danger'>Logout</button>
                </ul>
                {/*end::Start Navbar Links*/}
                {/*begin::End Navbar Links*/}
                
                {/*end::End Navbar Links*/}
            </div>
            {/*end::Container*/}
        </nav>

    )
};

export default NGOnavbar;
