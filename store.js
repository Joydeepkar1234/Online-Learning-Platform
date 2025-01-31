import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './features/courseSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    courses: courseReducer,
    user: userReducer,
  },
});

export default store;