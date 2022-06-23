import PropTypes from 'prop-types';
import classes from './Rocket.module.css';

const Rocket = ({
  src, name, description, reserved,
}) => (
  <section className={classes.rocket}>
    <div>
      <img src={src} alt={name} />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {!reserved && <button type="button">Reserve Rocket</button>}

    </div>
  </section>
);
export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
