import { createSlice } from '@reduxjs/toolkit';
import { initPhoneBook } from 'utils/initPhoneBook';
// const initialState = {
//   contacts: {
//     items: [],
//     // filter: '',
//   },
// };
export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: initPhoneBook,
  },
  reducers: {
    addSliceContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeSliceContact(state, action) {
      const deleteContactItem = state.contacts.filter(
        item => item.id !== action.payload
      );
      state.contacts = deleteContactItem;
    },
  },
});

export const { addSliceContact, removeSliceContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// const index = state.contacts.findIndex(
//   task => task.id === action.payload
// );
// state.contacts.splice(index, 1);
