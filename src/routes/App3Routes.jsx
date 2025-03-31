// src/routes/App3Routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import from your App3 structure
import Layout from '../app3/components/Layout/Layout';
import Dashboard from '../app3/pages/Dashboard';
import Users from '../app3/pages/Users';
import Products from '../app3/pages/Products';
import Orders from '../app3/pages/Orders';
import Reviews from '../app3/pages/Reviews';
import LandingPage from '../app3/pages/LandingPage';
// import ThemeSettings from '../app3/pages/ThemeSettings';
import Courses from '../app3/pages/Courses';
import Ads from '../app3/pages/Ads';
import Enrollments from '../app3/pages/Enrollments';
import Policies from '../app3/pages/Policies';

const App3Routes = () => {
  return (
    <Routes>
      <Route path="landing" element={<LandingPage />} />

      {/* Protected routes for App3 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
        {/* <Route path="theme" element={<ThemeSettings />} /> */}
        <Route path="courses" element={<Courses />} />
        <Route path="ads" element={<Ads />} />
        <Route path="enrollments" element={<Enrollments />} />
        <Route path="policies" element={<Policies />} />
      </Route>

      <Route path="*" element={<Navigate to="/app3" replace />} />
    </Routes>
  );
};

export default App3Routes;
