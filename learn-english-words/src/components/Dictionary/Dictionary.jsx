import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWord, addWordInGroup, deleteWord, deleteWordFromGroup, getAllWords, getWordsInGroup } from "../../actions/dictionary";

import { changeFavourite } from '../../actions/favourite'
import styles from "./Dictionary.module.css";
import { Table } from "../../UI/Table/Table";


import { AddWordField } from "../AddWordField/AddWordField";
import { useParams } from "react-router-dom";
import { ToBack } from "../ToBack/ToBack";

export const Dictionary = () => {
  const {group_name,group_id} = useParams()
  const dispatch = useDispatch();
  const isChange=useSelector(state => state.dictionary.isChange)
  useEffect(() => {
    dispatch(group_id !== '1' ? getWordsInGroup(group_id) : getAllWords());
    console.log('123')
  },[isChange]);
  const words = useSelector((state) => state.dictionary.words);
  return (
    <>
      <ToBack />
      <div className={styles.vocabulary}>
        <h1>{group_name.toUpperCase()}</h1>
        <Table words={words} isResults={false} deleteWord={deleteWord} deleteWordFromGroup={deleteWordFromGroup} changeFavourite={ changeFavourite } />
        <AddWordField addWord={group_id==='1' ? addWord : addWordInGroup} group_id={group_id}/>
      </div>
    </>
  );
};
