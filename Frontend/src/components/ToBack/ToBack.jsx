import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from './ToBack.module.css'
export const ToBack = () => {
  const navigate = useNavigate()
  const handlerToBack = () => {
    navigate(-1)
  }
  return (
    <NavLink to="/" className={styles.back} onClick={handlerToBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </NavLink>
  );
};
