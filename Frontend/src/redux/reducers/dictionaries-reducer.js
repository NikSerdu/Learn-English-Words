const GET_DICTIONARIES = "GET_DICTIONARIES";
const ADD_NEW_DICTIONARY = "ADD_NEW_DICTIONARY";
const DELETE_DICTIONARY = "DELETE_DICTIONARY";

const initialState = {
  dictionaries: [],
  isChange: true
};

export const dictionariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DICTIONARIES:
      return {
        ...state,
        dictionaries: action.payload,
        isChange: false
      };
    case ADD_NEW_DICTIONARY:
      return {
        ...state,
        isChange: true
      }
    case DELETE_DICTIONARY:
      return {
        ...state,
        isChange: true
      }
    default:
      return state;
  }
};

export const getDictionariesActionCreater = (dictionaries) => {
  return {
    type: GET_DICTIONARIES,
    payload: dictionaries,
  };
};

export const addNewDictionaryActionCreater = () => {
  return {
    type: ADD_NEW_DICTIONARY
  };
};

export const deleteDictionaryActionCreater = () => {
  return {
    type: DELETE_DICTIONARY
  };
};