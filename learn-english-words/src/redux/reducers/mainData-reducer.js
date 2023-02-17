const getWords = "GET_WORDS";


const initialState = {
  words: [],
};

export const mainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getWords:
      return {
        ...state,
        words: action.payload,
      };
    default:
      return state;
  }
};

export const getWordsActionCreater = (words) => {
  return {
    type: getWords,
    payload: words,
  };
};


