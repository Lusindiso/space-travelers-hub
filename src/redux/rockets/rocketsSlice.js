import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addData(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.rockets = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images,
        reserved: false,
      }));
    },
    toggleReserved(state, action) {
      state.rockets[action.payload].reserved = !state.rockets[action.payload].reserved;
    },
  },
});

export const rocketsActions = rocketsSlice.actions;

export default rocketsSlice;
