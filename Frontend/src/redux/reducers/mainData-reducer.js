const GET_WORDS = "GET_WORDS";
const SET_START_NUMBER_OF_WORD = 'SET_START_NUMBER_OF_WORD'
const initialState = {
  words: [],
  startNumberOfWord: 0
};

export const mainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case SET_START_NUMBER_OF_WORD:
      return {
        ...state,
        startNumberOfWord: action.payload
      }
    default:
      return state;
  }
};

export const getWordsActionCreater = (words) => {
  return {
    type: GET_WORDS,
    payload: words,
  };
};

export const setStartNumberOfWordActionCreater = (number) => {
  return {
    type: SET_START_NUMBER_OF_WORD,
    payload: number,
  };
};