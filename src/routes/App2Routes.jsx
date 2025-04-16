// src/routes/App2Routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import from your App2 structure
import Layout from '../app2/components/Layout/Layout';
import Dashboard from '../app2/pages/Dashboard';
import Users from '../app2/pages/Users';
import Products from '../app2/pages/Products';
import Orders from '../app2/pages/Orders';
import Reviews from '../app2/pages/Reviews';
import LandingPage from '../app2/pages/LandingPage';
import Courses from '../app2/pages/Courses';
import Ads from '../app2/pages/Ads';
import Enrollments from '../app2/pages/Enrollments';
import Policies from '../app2/pages/Policies';

const App2Routes = () => {
  return (
    <Routes>
      <Route path="landing" element={<LandingPage />} />

      {/* Protected routes for App2 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="courses" element={<Courses />} />
        <Route path="ads" element={<Ads />} />
        <Route path="enrollments" element={<Enrollments />} />
        <Route path="policies" element={<Policies />} />
      </Route>

      <Route path="*" element={<Navigate to="/ai-nsider" replace />} />
    </Routes>
  );
};

export default App2Routes;
