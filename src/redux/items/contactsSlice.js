import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state, action.payload] };
    },
    removeContact(state, action) {
      return { ...state, contacts: [...state, action.payload] };
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
