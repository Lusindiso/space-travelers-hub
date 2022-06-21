import { rocketsActions } from './rocketsSlice';

const fetchRocketsData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();

    return data;
  };

  try {
    const data = await fetchData();
    dispatch(rocketsActions.addData(data));
  } catch (error) {
    throw new Error('error');
  }
};

export default fetchRocketsData;
