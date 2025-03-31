// src/routes/App1Routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import the same components from your original App1
import Layout from '../app1/components/Layout/Layout';
import Dashboard from '../app1/pages/Dashboard';
import Users from '../app1/pages/Users';
import Products from '../app1/pages/Products';
import Orders from '../app1/pages/Orders';
import Reviews from '../app1/pages/Reviews';
import LandingPage from '../app1/pages/LandingPage';
// import ThemeSettings from '../app1/pages/ThemeSettings';

const App1Routes = () => {
  return (
    <Routes>
      {/* If you want an optional "landing" route inside App1 */}
      <Route path="landing" element={<LandingPage />} />

      {/* Protected routes for App1 */}
      <Route path="/" element={<Layout />}>
        {/* index = "/app1" */}
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
        {/* <Route path="theme" element={<ThemeSettings />} /> */}
      </Route>

      {/* Fallback to "/app1" if no match */}
      <Route path="*" element={<Navigate to="/app1" replace />} />
    </Routes>
  );
};

export default App1Routes;
