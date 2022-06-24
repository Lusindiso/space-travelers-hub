import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, JoinMission } from '../../redux/missions/missionSlice';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);

  const handleMisionReservation = ({ target }) => {
    const { id } = target;
    dispatch(JoinMission(id));
  };
  return (
    <Table
      striped
      bordered
      size="lg"
      className="container my-5"
      responsive="lg"
    >
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
              {!mission.canceled ? (
                <div className="btns">
                  <tr className="d-flex">
                    <button
                      type="button"
                      className="btn btn-secondary text-white"
                    >
                      NOT A MEMBER
                    </button>
                    <button
                      id={mission.id}
                      onClick={handleMisionReservation}
                      type="button"
                      className="btn btn-outline-dark ms-3"
                    >
                      Join Mission
                    </button>
                  </tr>
                </div>
              ) : (
                <div className="btns">
                  <tr className="d-flex">
                    <button type="button" className="btn btn-info text-white">
                      Active Member
                    </button>
                    <button
                      id={mission.id}
                      onClick={handleMisionReservation}
                      type="button"
                      className="btn btn-outline-danger ms-3"
                    >
                      Leave Mission
                    </button>
                  </tr>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
