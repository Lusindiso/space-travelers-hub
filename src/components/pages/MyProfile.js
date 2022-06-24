import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const reservedRocketsList = reservedRockets.map((rocket) => (
    <li key={rocket.id} className="list-group-item">
      {rocket.name}
    </li>
  ));

  const joinMissions = useSelector((state) => state.mission);
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
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {reservedRockets.length > 0 ? reservedRocketsList : <p className="p-2 text-danger">Please reserve a rocket</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
