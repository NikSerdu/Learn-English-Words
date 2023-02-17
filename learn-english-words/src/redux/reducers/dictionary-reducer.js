const getWordsInGroup = "GET_WORDS_IN_GROUP";
const addWord = "ADD_WORD";
const addWordInGroup = "ADD_WORD_IN_GROUP";
const deleteWord = "DELETE_WORD";
const getWords = "GET_WORDS";

const initialState = {
  words: [],
  isChange: true
};

export const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case getWords:
      return {
        ...state,
        words: action.payload,
        isChange: false
      }
    case getWordsInGroup:
      return {
        ...state,
        words: action.payload,
        isChange: false
      };
    case addWord:
      return {
        ...state,
        words: [...state.words],
        isChange: true
      }
    case addWordInGroup:
      return {
        ...state,
        isChange: true
      }
    case deleteWord:
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

export const getWordsInGroupActionCreater = (words) => {
  return {
    type: getWordsInGroup,
    payload: words,
  };
};

export const addWordActionCreater = (word,translate) => {
  return {
    type: addWord,
    payload: {
      word,translate
    },
  };
};


export const addWordInGroupActionCreater = () => {
  return {
    type: addWordInGroup,
  };
};

export const deleteWordActionCreater = () => {
  return {
    type: deleteWord,
  };
};