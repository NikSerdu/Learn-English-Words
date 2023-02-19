const CHECK_WORD = "CHECK_WORD";
const SET_NOW_WORD = "SET_NOW_WORD";
const CHANGE_NUMBER_OF_WORD = "CHANGE_NUMBER_OF_WORD";
const ADD_WRONG_WORD = "ADD_WRONG_WORD";
const RESET = "RESET";


const initialState = {
  nowWordEng: "",
  nowWordRus: "",
  isRight: null,
  numberOfWord: 0,
  wrongWords: [],
};

export const engRusRandomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOW_WORD:
      return {
        ...state,
        nowWordEng: action.payload.word,
        nowWordRus: action.payload.translate,
      };
    case CHECK_WORD:
      return {
        ...state,
        isRight: action.payload,
      };
    case CHANGE_NUMBER_OF_WORD:
      return {
        ...state,
        numberOfWord: action.payload,
      };
    case ADD_WRONG_WORD:
        return {
          ...state,
          wrongWords: [...state.wrongWords,action.payload],
        };
    case RESET:
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
    type: SET_NOW_WORD,
    payload: { word, translate },
  };
};

export const checkWordActionCreater = (isRight) => {
  return {
    type: CHECK_WORD,
    payload: isRight,
  };
};

export const changeNumberOfWordActionCreater = (number) => {
  return {
    type: CHANGE_NUMBER_OF_WORD,
    payload: number,
  };
};

export const addWrongWordActionCreater = (word) => {
  return {
    type: ADD_WRONG_WORD,
    payload: word
  };
};



export const resetActionCreater = () => {
  return {
    type: RESET,
  };
};