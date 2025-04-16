// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Public (unauthenticated) pages
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';

// A "home" screen after login where you show 3 logos to pick from
import SelectApp from './pages/SelectApp';

// Wrapped route groups for each original app
import App1Routes from './routes/App1Routes';
import App2Routes from './routes/App2Routes';
import App3Routes from './routes/App3Routes';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* Public routes (anyone can access) */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/forgot-password"
          element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/" replace />}
        />
        <Route
          path="/reset-password/:resetToken"
          element={!isAuthenticated ? <ResetPassword /> : <Navigate to="/" replace />}
        />

        {/* After login, show a "choose your app" page at the root ("/") */}
        <Route
          path="/"
          element={
            isAuthenticated ? <SelectApp /> : <Navigate to="/login" replace />
          }
        />

        {/* Sub-routes for each app. These require authentication */}
        <Route
          path="/app1/*"
          element={
            isAuthenticated ? <App1Routes /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/ai-nsider/*"
          element={
            isAuthenticated ? <App2Routes /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/app3/*"
          element={
            isAuthenticated ? <App3Routes /> : <Navigate to="/login" replace />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;











// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';
// import ForgotPassword from './pages/Auth/ForgotPassword'; // Import ForgotPassword
// import ResetPassword from './pages/Auth/ResetPassword';   // Import ResetPassword
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import Products from './pages/Products';
// import Orders from './pages/Orders';
// import Reviews from './pages/Reviews';
// import LandingPage from './pages/LandingPage';
// // import ThemeSettings from './pages/ThemeSettings';
// import Courses from './pages/Courses';
// import Ads from './pages/Ads';
// import Enrollments from './pages/Enrollments';
// import Policies from './pages/Policies';
// import { useSelector } from 'react-redux';


// const App = () => {
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route
//           path="/login"
//           element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
//         />
//         {/* <Route
//           path="/register"
//           element={!isAuthenticated ? <Register /> : <Navigate to="/" replace />}
//         /> */}
//         <Route
//           path="/forgot-password"
//           element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/reset-password/:resetToken"
//           element={!isAuthenticated ? <ResetPassword /> : <Navigate to="/" replace />}
//         />
//         <Route path="/landing" element={<LandingPage />} />

//         {/* Protected Routes */}
//         <Route
//           path="/"
//           element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}
//         >
//           <Route index element={<Dashboard />} />
//           <Route path="users" element={<Users />} />
//           <Route path="products" element={<Products />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="reviews" element={<Reviews />} />
//           {/* <Route path="/theme" element={<ThemeSettings />} /> */}
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/ads" element={<Ads />} />
//           <Route path="/enrollments" element={<Enrollments />} />
//           <Route path="/policies" element={<Policies />} />
//         </Route>

//         {/* Fallback Route */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
