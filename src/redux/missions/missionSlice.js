import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  missions: [],
};
const missionsURL = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch(missionsURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMissions.pending]: () => {
      console.log('fetching');
    },
    [fetchMissions.fulfilled]: (state, action) => {
      console.log('success');
      state.missions = action.payload;
    },

  },
});

export default missionsSlice.reducer;
