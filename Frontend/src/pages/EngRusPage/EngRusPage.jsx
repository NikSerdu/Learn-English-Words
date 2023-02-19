import React from "react";
import { useSelector } from "react-redux";
import EngRusRandomMode from "../../components/EngRusRandomMode/EngRusRandomMode";
import {
  setNowWord,
  checkWord,
  changeNumberOfWord,
  addWrongWord,
  reset,
} from "../../actions/eng-rus-random";
export const EngRusPage = () => {
  const words = useSelector((state) => state.mainData.words);
  const numberOfWord = useSelector((state) => state.engRusRandom.numberOfWord);
  const isRight = useSelector((state) => state.engRusRandom.isRight);
  const nowEngWord = useSelector((state) => state.engRusRandom.nowWordEng);
  const nowRusWord = useSelector((state) => state.engRusRandom.nowWordRus);

  return (
    <EngRusRandomMode
      word={nowEngWord}
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
