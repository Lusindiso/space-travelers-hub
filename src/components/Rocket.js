import classes from './Rocket.module.css';

const Rocket = ({ src, name, description }) => (
  <section className={classes.rocket}>
    <div>
      <img src={src} alt={`${name} image`} />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button>Reserve rocket</button>
    </div>
  </section>
);
export default Rocket;
