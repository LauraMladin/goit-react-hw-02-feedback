import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return message && <p className={css.p}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
