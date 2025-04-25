import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate(); // useNavigate hook inside the component

    const handleLogoutClick = () => {
        localStorage.clear();
        navigate('/login'); // correctly using the navigate function
    };

    return (
        <nav className="app-header navbar navbar-expand bg-body">
            <div className="container-fluid">
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
                        <Link to="/user/dashboard" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <Link to="/user/contactus" className="nav-link">Contact</Link>
                    </li>
                    <button onClick={handleLogoutClick} className='btn btn-danger'>Logout</button>
                </ul>
            </div>
        </nav>
    );
};
