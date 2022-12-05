import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './items/contactsSlice';
import { filterSlice } from './filter/filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//*       Persist            //
const persistConfig = {
  key: 'root',
  storage,
};

const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    phonebook: persistedContacts,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
// export const filterValue = state => state.filter;
// export const filterValue = state => state.filter.filter;
// export const filterValue = state => state.contacts.filter;
// export const filterValue = state => state.phonebook.filter;
// export const filterValue = state => state.contacts.filter.filter;
// export const filterValue = state => state.phonebook.filter.filter;
// export const contactValue = state => state.phonebook.contacts.items;