import { faCheck, faQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToHome } from "../ToHome/ToHome";
import { ChooseTranslateItem } from "./ChooseTranslateItem/ChooseTranslateItem";
import styles from "./ChooseTranslateMode.module.css";
export const ChooseTranslateMode = ({
  word,
  word_list,
  translate,
  numberOfWord,
  isRight,
  words,
  setNowWord,
  checkWord,
  changeNumberOfWord,
  addWrongWord,
  reset,
}) => {
  const dispatch = useDispatch();
  const redirect = useNavigate()
  useEffect(() => {
    dispatch(
      setNowWord(words[numberOfWord].word, words[numberOfWord].translate)
    );
  }, []);

  const handlerCheckWord = (id) => {
      const word = word_list[id]
      dispatch(checkWord(word, translate));
      if (word !== translate) {
        dispatch(addWrongWord(words[numberOfWord]));
      }
      if (numberOfWord + 1 < words.length) {
        dispatch(changeNumberOfWord(numberOfWord + 1));
        dispatch(
          setNowWord(
            words[numberOfWord + 1].word,
            words[numberOfWord + 1].translate
          )
        );
      } else {
        redirect("/results");
      }
  };

  return (
    <>
    <ToHome reset={reset} />
    <div className={styles.wrap}>
      <div className={styles.header}>Выберите правильный перевод</div>
      <p className={styles.nowWord}>{word}
      <FontAwesomeIcon
            className={styles.check}
            icon={isRight===true ? faCheck : isRight===false ? faXmark : faQuestion}
          />
      </p>
      <div className={styles.cards}>
        {word_list.map((elem, index) => (
          <ChooseTranslateItem key={index} id={index} translate={elem} checkWord={handlerCheckWord}/>
        ))}
      </div>
    </div>
    </>
  );
};
