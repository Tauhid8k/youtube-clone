import { createSlice } from '@reduxjs/toolkit';

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState: {
    selectedCategory: 'Recent',
  },

  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const sideMenuActions = sideMenuSlice.actions;
export const sideMenuReducer = sideMenuSlice.reducer;
