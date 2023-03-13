import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  setNowWord,
  checkWord,
  changeNumberOfWord,
  addWrongWord,
  reset,
} from "../../actions/eng-rus-random";
import EngRusRandomMode from "../../components/EngRusRandomMode/EngRusRandomMode";
export const RandomPage = () => {
  const words = useSelector((state) => state.mainData.words);
  useMemo(() => words.sort(() => Math.random() - 0.5), [])
  const isRight = useSelector((state) => state.engRusRandom.isRight);
  const nowEngWord = useSelector((state) => state.engRusRandom.nowWordEng);
  const nowRusWord = useSelector((state) => state.engRusRandom.nowWordRus);
  const numberOfWord = useSelector((state) => state.engRusRandom.numberOfWord);
  return (
    <EngRusRandomMode
      word={nowRusWord}
      translate={nowEngWord}
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
