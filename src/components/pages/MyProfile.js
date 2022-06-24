import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.map((rocket) => (rocket.reserved ? (
    <li key={rocket.id} className="list-group-item">
      {rocket.name}
    </li>
  ) : false));

  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {reservedRockets.length > 0 ? reservedRockets : <p className="p-2 text-danger">Please reserve a rocket</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
