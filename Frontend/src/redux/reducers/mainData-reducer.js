const GET_WORDS = "GET_WORDS";

const initialState = {
  words: [],
};

export const mainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORDS:
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
    type: GET_WORDS,
    payload: words,
  };
};
