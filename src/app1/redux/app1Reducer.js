// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';
import productsReducer from './slices/productsSlice';
import ordersReducer from './slices/ordersSlice';
import reviewsReducer from './slices/reviewsSlice';
// import themeReducer from './slices/themeSlice';

export const app1Reducers = {
 
    // auth: authReducer,
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    reviews: reviewsReducer,
    // theme: themeReducer,

};

// export default store;
