import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { contactsSlice } from './items/contactsSlice';

export const store = configureStore({
  reducer: {
    items: contactsSlice.reducer,
  },
  // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
