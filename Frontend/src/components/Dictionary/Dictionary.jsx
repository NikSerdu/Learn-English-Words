import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWord,
  addWordInDictionary,
  deleteWord,
  deleteWordFromDictionary,
  getAllWords,
  getWordsInDictionary,
} from "../../actions/dictionary";

import { changeFavourite } from "../../actions/favourite";
import styles from "./Dictionary.module.css";
import { Table } from "../../UI/Table/Table";

import { AddWordField } from "../AddWordField/AddWordField";
import { useParams } from "react-router-dom";
import { ToBack } from "../ToBack/ToBack";

export const Dictionary = () => {
  console.log('123')
  const isChangeWords = useSelector(state => state.dictionary.isChange)
  const isChangeFavourite = useSelector(state => state.favourites.isChange)
  const { dictionary_name, dictionary_id } = useParams();
  const dispatch = useDispatch();
  const words = useSelector((state) => state.dictionary.words);
  useEffect(() => {
    console.log(123)
    dispatch(dictionary_id !== "1" ? getWordsInDictionary(dictionary_id) : getAllWords());
  },[isChangeWords,isChangeFavourite]);
  return (
    <>
      <ToBack />
      <div className={styles.dictionary}>
        <h1>{dictionary_name.toUpperCase()}</h1>
        <Table
          words={words}
          isResults={false}
          deleteWord={deleteWord}
          deleteWordFromDictionary={deleteWordFromDictionary}
          changeFavourite={changeFavourite}
        />
        <AddWordField
          addWord={dictionary_id === "1" ? addWord : addWordInDictionary}
          dictionary_id={dictionary_id}
        />
      </div>
    </>
  );
};
