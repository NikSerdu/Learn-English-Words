import axios from "axios";
import {
  getWordsActionCreater, setStartNumberOfWordActionCreater,
} from "../redux/reducers/mainData-reducer";

export const getWords = (dictionary_id) => {
  return (dispatch) => {
    axios.get("/getWordsOfDictionary",{params:{dictionary_id}}).then((response) => {
      dispatch(getWordsActionCreater(response.data.values));
    });
  };
};

export const setStartNumberOfWord = (number) => {
  return (dispatch) => {dispatch(setStartNumberOfWordActionCreater(number))};
};
