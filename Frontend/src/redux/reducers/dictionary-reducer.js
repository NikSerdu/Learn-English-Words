const GET_WORDS_IN_DICTIONARY = "GET_WORDS_IN_DICTIONARY";
const ADD_WORD = "ADD_WORD";
const ADD_WORD_IN_DICTIONARY = "ADD_WORD_IN_DICTIONARY";
const DELETE_WORD = "DELETE_WORD";
const GET_WORDS = "GET_WORDS";

const initialState = {
  words: [],
  isChange: true
};

export const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        words: action.payload,
        isChange: false
      }
    case GET_WORDS_IN_DICTIONARY:
      return {
        ...state,
        words: action.payload,
        isChange: false
      };
    case ADD_WORD:
      return {
        ...state,
        words: [...state.words],
        isChange: true
      }
    case ADD_WORD_IN_DICTIONARY:
      return {
        ...state,
        isChange: true
      }
    case DELETE_WORD:
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

export const getWordsInDictionaryActionCreater = (words) => {
  return {
    type: GET_WORDS_IN_DICTIONARY,
    payload: words,
  };
};

export const addWordActionCreater = (word,translate) => {
  return {
    type: ADD_WORD,
    payload: {
      word,translate
    },
  };
};


export const addWordInDictionaryActionCreater = () => {
  return {
    type: ADD_WORD_IN_DICTIONARY,
  };
};

export const deleteWordActionCreater = () => {
  return {
    type: DELETE_WORD,
  };
};