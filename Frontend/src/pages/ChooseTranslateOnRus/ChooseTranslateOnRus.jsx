import React from "react";
import { useSelector } from "react-redux";
import { addWrongWord, changeNumberOfWord, checkWord, reset, setNowWord } from "../../actions/choose-translate";
import { ChooseTranslateMode } from "../../components/ChooseTranslateMode/ChooseTranslateMode";

export const ChooseTranslateOnRus = () => {
  const words = useSelector((state) => state.mainData.words);
  const numberOfWord = useSelector((state) => state.chooseTranslate.numberOfWord);
  const isRight = useSelector((state) => state.chooseTranslate.isRight);
  const nowEngWord = useSelector((state) => state.chooseTranslate.nowWordEng);
  const nowRusWord = useSelector((state) => state.chooseTranslate.nowWordRus);
  const randomWords = (min, max, array, word_count,translate) => {
    const random_words = [];
    while (random_words.length !== word_count) {
      let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
      let word = array[rand].translate;
      if (!random_words.includes(word) && word !== translate) {
        random_words.push(word);
      }
    }
    return random_words;
  };
  const word_list = randomWords(0, words.length - 1, words, 3, nowRusWord);
  word_list.push(words[numberOfWord].translate);
  word_list.sort(() => Math.random() - 0.5);
  return (
    <ChooseTranslateMode
      word={nowEngWord}
      word_list={word_list}
      translate={nowRusWord}
      numberOfWord={numberOfWord}
      isRight={isRight}
      words={words}
      setNowWord={setNowWord}
      checkWord={checkWord}
      changeNumberOfWord={changeNumberOfWord}
      addWrongWord={addWrongWord}
      reset={reset}
    />
  );
};
