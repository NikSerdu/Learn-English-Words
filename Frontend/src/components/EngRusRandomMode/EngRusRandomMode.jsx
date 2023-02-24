import styles from "./EngRusRandomMode.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToHome } from "../ToHome/ToHome";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Count } from "../Count/Count";


function EngRusRandomMode({
  word,
  translate,
  numberOfWord,
  isRight,
  words,
  setNowWord,
  checkWord,
  changeNumberOfWord,
  addWrongWord,
  reset
}) {

  const dispatch = useDispatch();
  const [number, setNumber] = useState(1)
  useEffect(() => {
    dispatch(setNowWord(words[numberOfWord].word,words[numberOfWord].translate));
  },[]);

  const redirect = useNavigate()
  const [text, setText] = useState("");
  const [startNumber] = useLocalStorage("start_number_of_word");
  const handlerCheckWord = (e) => {
    if (e.code === "Enter" || e.key === 'Enter') {
      dispatch(checkWord(text.trim().toLowerCase(),translate.toLowerCase()));
      if (text.trim().toLowerCase() !== translate.toLowerCase()) {
        dispatch(addWrongWord(words[numberOfWord]))
      }
      if (numberOfWord + 1 < words.length) {
        dispatch(changeNumberOfWord(numberOfWord+1))
        dispatch(setNowWord(words[numberOfWord+1].word,words[numberOfWord+1].translate));
        setText('')
      } else {
        redirect('/results')
      }
      setNumber(number => number + 1)
    }
  };



  return (
    <div>
      <ToHome reset={reset}/>
      <Count number={number} startNumber={startNumber}/>
      <div className={styles.wrap}>
        <p className={styles.nowWord}>{word}</p>
        <div className={styles.entryField}>
          <input
            onKeyDown={handlerCheckWord}
            onChange={(e) => setText(e.target.value)}
            value={text}
            className={styles.readWord}
            type="text"
            placeholder="Введите перевод"
          ></input>
          <FontAwesomeIcon
            className={styles.check}
            icon={isRight===true ? faCheck : isRight===false ? faXmark : faQuestion}
          />
        </div>
      </div>
    </div>
  );
}
export default EngRusRandomMode;
