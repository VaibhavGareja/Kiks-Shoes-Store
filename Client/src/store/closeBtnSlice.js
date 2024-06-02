import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isClosed: true,
};

const closeBtnSlice = createSlice({
  name: 'closeBtn',
  initialState,
  reducers: {
    openCloseButton: state => {
      state.isClosed = false;
    },
    closeCloseButton: state => {
      state.isClosed = true;
    },
  },
});

export const { openCloseButton, closeCloseButton } = closeBtnSlice.actions;

export default closeBtnSlice.reducer;
