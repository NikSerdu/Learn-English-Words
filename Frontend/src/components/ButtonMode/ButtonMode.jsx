import styles from './ButtonMode.module.css'
import { NavLink } from "react-router-dom";

function ButtonMode(props) {
  const color = `${styles.card} ${props.violet ? styles.violet : props.orange ? styles.orange : styles.red}`
  return (
    <NavLink to={props.link} className={color}>
      <div className={styles.card__label}>Mode</div>
      <p className={styles.card__header} >{props.text}</p>
    </NavLink>
  );
}
export default ButtonMode;
