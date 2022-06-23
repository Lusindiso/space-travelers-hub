/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addData(state, action) {
      state.rockets = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images,
        reserved: false,
      }));
    },
    toggleReserved(state, action) {
      // eslint-disable-next-line array-callback-return
      state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          rocket.reserved = !rocket.reserved;
        }
      });
    },
  },
});

export const rocketsActions = rocketsSlice.actions;

export default rocketsSlice;
