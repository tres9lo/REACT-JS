import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function User() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="profile" style={{ marginRight: '10px', textDecoration: 'none', color: '#007bff' }}>Profile</Link>
                <Link to="account" style={{ textDecoration: 'none', color: '#007bff' }}>Account</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default User;    