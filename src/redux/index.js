import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionsSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice.reducer,
    mission: missionsSlice,
  },
});

export default store;
