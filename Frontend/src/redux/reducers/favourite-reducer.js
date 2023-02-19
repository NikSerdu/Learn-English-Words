const GET_WORDS = "GET_WORDS";
const UPDATE_WORD = "UPDATE_WORD";

const initialState = {
  words: [],
  isChange: true
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        words: action.payload,
        isChange: false
      };
    case UPDATE_WORD:
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
    type: GET_WORDS,
    payload: words,
  };
};

export const updateWordActionCreater = () => {
  return {
    type: UPDATE_WORD,
  };
};
