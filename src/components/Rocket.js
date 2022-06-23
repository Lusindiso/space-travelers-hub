import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketsActions } from '../redux/rockets/rocketsSlice';
import classes from './Rocket.module.css';

const Rocket = ({
  id,
  src, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(rocketsActions.toggleReserved(id));
  };
  return (
    <section className={classes.rocket}>
      <div>
        <img src={src} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          {reserved && <span>Reserved</span>}
          {description}
        </p>
        {!reserved && <button className={classes.book} type="button" onClick={toggleHandler}>Reserve Rocket</button>}
        {reserved && <button className={classes.cancel} type="button" onClick={toggleHandler}>Cancel Reservation</button>}

      </div>
    </section>
  );
};
export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,

};
