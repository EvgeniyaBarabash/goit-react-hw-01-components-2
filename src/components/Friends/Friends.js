import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friends.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
