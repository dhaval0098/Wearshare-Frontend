import React from 'react'
import { Link } from 'react-router-dom'

export const Delievrynavbar = () => {
   

    
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
                        <Link to ="deliverydashboard">Home</Link>
                    </li>
                    <li className="nav-item d-none d-md-block">
                    <Link to ="contactus">contact</Link>
                    </li>
                </ul>
                {/*end::Start Navbar Links*/}
                {/*begin::End Navbar Links*/}
            </div>
            {/*end::Container*/}
        </nav>

    )
}
