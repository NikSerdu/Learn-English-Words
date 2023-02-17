import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./AddWordField.module.css";
export const AddWordField = ({ addWord, group_id }) => {
  const [engWord, changeEngWord] = useState("");
  const [rusWord, changeRusWord] = useState("");
  const dispatch = useDispatch();
  const addNewWord = () => {
    if (engWord !== "" && rusWord !== "") {
      dispatch(addWord(engWord, rusWord, group_id));
      changeEngWord("");
      changeRusWord("");
    } else {
      console.log('Заполните поля полностью!')
    }
  };
  return (
    <div className={styles.entryFields}>
      <div className={styles.entryField}>
        <input
          value={engWord}
          className={styles.readWord}
          placeholder="Слово на английском"
          onChange={(e) => changeEngWord(e.target.value)}
        ></input>
      </div>
      <div className={styles.entryField}>
        <input
          value={rusWord}
          className={styles.readWord}
          placeholder="Слово на русском"
          onChange={(e) => changeRusWord(e.target.value)}
        ></input>
      </div>
      <div onClick={addNewWord} className={styles.btn}>
        Добавить
      </div>
    </div>
  );
};
