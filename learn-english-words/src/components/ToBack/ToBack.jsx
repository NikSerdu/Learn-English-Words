import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from './ToBack.module.css'
export const ToBack = ({reset}) => {
  const navigate = useNavigate()
  const handleToBack = () => {
    navigate(-1)
  }
  return (
    <NavLink to="/" className={styles.back} onClick={handleToBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </NavLink>
  );
};
