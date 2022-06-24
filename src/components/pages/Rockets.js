import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRocketsData from '../../redux/rockets/rocketsActions';
import Rocket from '../Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length < 1) {
      dispatch(fetchRocketsData());
    }
  }, [dispatch]);

  return (
    <main>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          src={rocket.image[0]}
          reserved={rocket.reserved}
        />
      ))}
    </main>
  );
};

export default Rockets;
