import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import todosReducer from './features/todosSlice';
import themeReducer from './features/themeSlice';  
import cartReducer from   './features/cartReducer'
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  reducer: {
    todos: todosReducer,
  },

  reducer: {
    theme: themeReducer,
  },

  reducer: {
    cart: cartReducer,
  },

  reducer: {
    auth: authReducer,
  },
});


export default store;
