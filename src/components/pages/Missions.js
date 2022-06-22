import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.mission);
  console.log(missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch, fetchMissions]);
  return (
    <div>
      missions under construction
    </div>
  );
};

export default Missions;
