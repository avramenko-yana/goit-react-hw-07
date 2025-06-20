import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './Contact.module.css';
import { FaUser, FaPhone, FaTrash } from 'react-icons/fa';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetailLine}>
          <FaUser className={styles.icon} />
          <p className={styles.contactName}>{name}</p>
        </div>
        <div className={styles.contactDetailLine}>
          <FaPhone className={styles.icon} />
          <p className={styles.contactNumber}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDelete}
        aria-label={`Delete ${name}`}
      >
        <FaTrash className={styles.iconDelete} /> Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;