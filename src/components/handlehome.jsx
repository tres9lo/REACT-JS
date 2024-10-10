import React from 'react'
import { useNavigate } from 'react-router-dom';

function Handle() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/Login", { replace: false });
    }

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Handle;