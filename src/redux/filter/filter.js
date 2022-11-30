import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    contacts: [],
  },
  reducers: {
    //     addContact(state, action) {
    //       return { ...state, contacts: [...state, action.payload] };
    //     },
    //     removeContact(state, action) {
    //       return { ...state, contacts: [...state, action.payload] };
    //     },
  },
});

// export const { addContact, removeContact } = contactsSlice.actions;
