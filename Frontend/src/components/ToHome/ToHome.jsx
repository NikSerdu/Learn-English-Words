import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from './ToHome.module.css'
export const ToHome = ({reset}) => {
  const dispatch = useDispatch()
  const handlerReset = () => {
    dispatch(reset)
  }
  return (
    <NavLink to="/" className={styles.home} onClick={handlerReset}>
      <FontAwesomeIcon icon={faHouse} />
    </NavLink>
  );
};
