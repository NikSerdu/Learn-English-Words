import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Popup.module.css'

export const Popup = (props) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
      <div className={styles.close} onClick={props.closePopup}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
