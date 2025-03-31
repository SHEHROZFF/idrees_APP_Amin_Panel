// src/components/Layout/Header.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAdmin } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaBars, FaTimes, FaHome } from 'react-icons/fa'; // React Icons
import ThemeToggle from '../ThemeToggle';
import logo from '../../assets/logo.jpg'; // Importing the logo image

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state) => state.auth.admin);

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow px-6 py-4">
      <div className="flex items-center">


        {/* Logo */}
        <img src={logo} alt="Admin Panel Logo" className="h-8 w-8 object-contain rounded-full" />

        {/* Title (Hidden on small screens when sidebar is collapsed) */}
        <h1 className="text-2xl font-bold ml-2 text-gray-800 dark:text-white hidden md:block">
          Admin Dashboard
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* gobackbutton */}
        <button onClick={() => navigate('/')} className='bg-slate-200 text-black px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200'>
          <FaHome className="h-6 w-6" />
        </button>
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Logout Button */}
        {/* {admin && ( */}
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <FaSignOutAlt className="h-5 w-5 mr-2" />
            Logout
          </button>
        {/* )} */}
      </div>
    </header>
  );
};

export default Header;
