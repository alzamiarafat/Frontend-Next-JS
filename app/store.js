import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categoryReducer';

export default configureStore({
  reducer: {
    category: categoryReducer
  },
})