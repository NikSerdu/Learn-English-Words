import React, { useEffect } from "react";
import styles from "./Results.module.css";

import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../actions/eng-rus-random";

import { changeFavourite } from "../../actions/favourite";
import { Table } from "../../UI/Table/Table";
import { ToHome } from "../../components/ToHome/ToHome";
import { useNavigate } from "react-router-dom";
export const Results = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.engRusRandom.wrongWords);
  const redirect = useNavigate()
  useEffect(() => {
    if (words.length === 0) {
      redirect('/')
    }
  },[])

  const addToFavourite = () => {
    for (let i = 0; i < words.length; i++) {
      const id = words[i].id;
      dispatch(changeFavourite(id, 1));
    }
    redirect('/')
  };
  return (
    <div>
      <ToHome reset={reset} />
      <div className={styles.results}>
        <h1 className={styles.header}>Wrong Words</h1>
        <Table
          words={words}
          isResults={true}
        />
        <div onClick={addToFavourite} className={styles.btn}>
          Add all to favorites
        </div>
      </div>
    </div>
  );
};
