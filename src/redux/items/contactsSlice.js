import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: {
    items: [],
    // filter: '',
  },
};
export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addSliceContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    removeSliceContact(state, action) {
      const deleteContactItem = state.contacts.items.filter(
        item => item.id !== action.payload
      );

      state.contacts.items = deleteContactItem;
    },
  },
});

export const { addSliceContact, removeSliceContact } = contactsSlice.actions;
export default contactsSlice.reducer;
//*  удаляем контакт из  списка  фильтра   //
// const deleteContactItem = contactId => {
//  state.contacts.filter(contact => contact.id !== action.payload)
//
// };
