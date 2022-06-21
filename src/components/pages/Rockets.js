import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRocketsData from '../../redux/rockets/rocketsActions';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  return (
    <div>
      Under construction
    </div>
  );
}

export default Rockets;
