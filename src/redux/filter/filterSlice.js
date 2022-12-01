import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    filterChanges(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterChanges } = filterSlice.actions;
