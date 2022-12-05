import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   contacts: {
//     filter: '',
//   },
// };
export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterChanges(state, action) {
      return {
        state,
        filter: action.payload,
      };

      // return (state.contacts.filter = action.payload.toLowerCase());
    },
  },
});

export const { filterChanges } = filterSlice.actions;
