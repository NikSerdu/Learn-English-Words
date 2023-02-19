
import { addWrongWordActionCreater, changeNumberOfWordActionCreater, checkWordActionCreater, resetActionCreater, setNowWordActionCreater } from "../redux/reducers/engRusRandom-reducer";



export const setNowWord = (word,translate) => {
  return (dispatch) => {
    dispatch(setNowWordActionCreater(word,translate))
  };
};

export const checkWord = (inputText,word) => {
  return (dispatch) => {
    if (inputText === word) {
      dispatch(checkWordActionCreater(true))
    } else {
      dispatch(checkWordActionCreater(false))
    }
  };
};

export const changeNumberOfWord = (number) => {
  return (dispatch) => {dispatch(changeNumberOfWordActionCreater(number))};
};

export const addWrongWord = (word) => {
  return (dispatch) => {dispatch(addWrongWordActionCreater(word))};
};



export const reset = () => {
  return (dispatch) => {dispatch(resetActionCreater())};
};

