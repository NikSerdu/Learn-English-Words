import styles from "./DictionaryCard.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

function DictionaryCard(props) {
  const dispatch = useDispatch();
  const handlerDeleteGroup = () => {
    dispatch(props.deleteGroup(props.id));
  };
  const setLearnGroupId = () => {
    props.setLearnGroupId(props.id)
  }
  const color = `${styles.card} ${
    props.violet ? styles.violet : props.orange ? styles.orange : styles.red
  }`;
  return (
    <div className={color}>
      <NavLink to={props.link}>
        <div className={styles.card__label}>Group of words</div>
        <p className={styles.card__header}>{props.text}</p>
      </NavLink>
      <div className={styles.wrap}>
        <div className={styles.btn} onClick={setLearnGroupId}>{props.learn_group_id === props.id ? 'На изучении' : 'Изучать'}</div>
        {props.id !== 1 && props.id !== 2 && (<FontAwesomeIcon icon={faTrash} onClick={handlerDeleteGroup} />)}
      </div>
    </div>
  );
}
export default DictionaryCard;
