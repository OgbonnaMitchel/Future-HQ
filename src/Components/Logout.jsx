import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext'; 
import LogOut from "../assets/logout.png"

const LogoutButton = ({ children, className }) => {
    
    const { logout } = useAuth();
    

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login'); 
    };

    return (
        <button
            onClick={handleLogout}
            className={`flex items-center space-x-2 p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors ${className}`}
            aria-label="Logout"
        >
            {children || (
                <>
                    <span><img src={LogOut} alt="Logout button" /></span>
                    <span>Logout</span>
                </>
            )}
        </button>
    );
};

export default LogoutButton;