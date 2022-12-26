
import PropTypes from "prop-types";
import css from '../List/List.module.css';

export const List = ({ followers }) => {
  return (
    <ul className={css.card__list}>
      <li className={css.item__tweet}>777 Tweets</li>
      <li className={css.item__followers}>
        {' '}
        {followers.toLocaleString('en')} FOLLOWERS
      </li>
    </ul>
  );
};

List.propTypes ={ 
followers: PropTypes.number.isRequired
};