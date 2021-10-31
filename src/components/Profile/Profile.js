import PropTypes from 'prop-types';
import Stats from '../Stats/Stats.js';
import s from './Profile.module.css';
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
