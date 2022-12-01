import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addSliceContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      const deleteContactItem = state.contacts.filter(
        contact => contact.id !== action.payload
      );

      state.contacts = deleteContactItem;
    },
  },
});

export const { addSliceContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
//*  удаляем контакт из  списка  фильтра   //
// const deleteContactItem = contactId => {
//  state.contacts.filter(contact => contact.id !== action.payload)
//
// };
