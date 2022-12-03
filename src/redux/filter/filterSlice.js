import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: {
    filter: '',
  },
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChanges(state, action) {
      return (state.contacts.filter = action.payload);
    },
  },
});

export const { filterChanges } = filterSlice.actions;
