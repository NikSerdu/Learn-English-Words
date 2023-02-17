const checkWord = "CHECK_WORD";
const setNowWord = "SET_NOW_WORD";
const changeNumberOfWord = "CHANGE_NUMBER_OF_WORD";
const addWrongWord = "ADD_WRONG_WORD";
const reset = "RESET";


const initialState = {
  nowWordEng: "",
  nowWordRus: "",
  isRight: null,
  numberOfWord: 0,
  wrongWords: [],
};

export const engRusRandomReducer = (state = initialState, action) => {
  switch (action.type) {
    case setNowWord:
      return {
        ...state,
        nowWordEng: action.payload.word,
        nowWordRus: action.payload.translate,
      };
    case checkWord:
      return {
        ...state,
        isRight: action.payload,
      };
    case changeNumberOfWord:
      return {
        ...state,
        numberOfWord: action.payload,
      };
    case addWrongWord:
        return {
          ...state,
          wrongWords: [...state.wrongWords,action.payload],
        };
    case reset:
      return({
        ...state,
        nowWordRus: '',
        nowWordEng: '',
        isRight: null,
        numberOfWord: 0,
        wrongWords: []
      })
    default:
      return state;
  }
};

export const setNowWordActionCreater = (word, translate) => {
  return {
    type: setNowWord,
    payload: { word, translate },
  };
};

export const checkWordActionCreater = (isRight) => {
  return {
    type: checkWord,
    payload: isRight,
  };
};

export const changeNumberOfWordActionCreater = (number) => {
  return {
    type: changeNumberOfWord,
    payload: number,
  };
};

export const addWrongWordActionCreater = (word) => {
  return {
    type: addWrongWord,
    payload: word
  };
};



export const resetActionCreater = () => {
  return {
    type: reset,
  };
};