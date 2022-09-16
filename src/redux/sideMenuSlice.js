import { createSlice } from '@reduxjs/toolkit';

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState: {
    loading: true,
    selectedCategory: 'Recent',
    isMenuOpen: false,
  },

  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setIsMenuOpen(state, action) {
      state.loading = false;
      state.isMenuOpen = action.payload;
    },
  },
});

export const sideMenuActions = sideMenuSlice.actions;
export const sideMenuReducer = sideMenuSlice.reducer;
