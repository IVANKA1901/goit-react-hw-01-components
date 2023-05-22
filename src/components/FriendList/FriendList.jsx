import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends_list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.friends_item} key={id}>
            <span className={`${css.friends_status} ${css[isOnline]}`}>
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.friends_name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
