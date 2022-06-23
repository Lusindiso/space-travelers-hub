import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const joinMissions = useSelector((state) => state.mission);
  // const reserveRockets = useSelector((state) => state.post);
  const filteredMissions = joinMissions.filter(
    (mission) => mission.canceled === true,
  );

  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
        <div className="card mission-card">
          <ul className="list-group list-group-flush">
            {filteredMissions.length ? (
              filteredMissions.map((mission) => {
                const { id, name } = mission;
                return (
                  <li key={id} className="list-group-item">
                    {name}
                  </li>
                );
              })
            ) : (
              <p className="p-2 text-danger">Please join a mission</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
