const getWords = "GET_WORDS";
const addWord = "ADD_WORD";
const updateWord = "UPDATE_WORD";

const initialState = {
  words: [],
  isChange: true
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case getWords:
      return {
        ...state,
        words: action.payload,
        isChange: false
      };
    case updateWord:
      return {
        ...state,
        isChange: true
      }
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

export const updateWordActionCreater = () => {
  return {
    type: addWord,
  };
};
