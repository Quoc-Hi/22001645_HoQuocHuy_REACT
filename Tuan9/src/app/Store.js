import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todosReducer from '../features/todosSlice';
import themeReducer from '../features/themeSlice';
import cartReducer from '../features/cartSlice';
import authReducer from '../features/authSlice';
import userReducer from '../features/UsersSlice';
import countersReducer from '../features/countersSlice';
import bmiReducer from '../features/bmiSlice';
import eventReducer from '../features/eventSlice';
 
 export const store = configureStore({
   reducer: {
     counter: counterReducer,
     todos: todosReducer,
     theme: themeReducer,
     cart: cartReducer,
     auth: authReducer,
     user: userReducer,
     counters: countersReducer,
     bmi: bmiReducer,
     event: eventReducer,
   }
 });