import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export const rocketsActions = rocketsSlice.actions;

export default rocketsSlice;
