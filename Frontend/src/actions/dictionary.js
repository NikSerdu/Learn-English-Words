import axios from "axios";
import {
  addWordActionCreater,
  addWordInDictionaryActionCreater,
  deleteWordActionCreater,
  getWordsActionCreater,
  getWordsInDictionaryActionCreater,
} from "../redux/reducers/dictionary-reducer";


export const getAllWords = () => {
  return (dispatch) => {
    axios.get("/getWords").then((response) => {
      dispatch(getWordsActionCreater(response.data.values));
    });
  };
};


export const getWordsInDictionary = (dictionary_id) => {
  return (dispatch) => {
    axios.get("/getWordsOfDictionary",{params:{dictionary_id}}).then((response) => {
      dispatch(getWordsInDictionaryActionCreater(response.data.values));
    });
  };
};

export const addWord = (word, translate) => {
  return (dispatch) => {
    axios.post("/addWord", { word, translate },).then((res) => {
      dispatch(addWordActionCreater(word, translate));
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};

export const addWordInDictionary = (word, translate,dictionary_id) => {
  return (dispatch) => {
    axios.post("/addWordInDictionary", { word, translate,dictionary_id },).then((res) => {
      dispatch(addWordInDictionaryActionCreater());
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};



export const deleteWord = (word_id) => {
  return (dispatch) => {
    axios.delete("/deleteWord", { data: { word_id } },).then((res) => {
      dispatch(deleteWordActionCreater());
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};

export const deleteWordFromDictionary = (word_id,dictionary_id) => {
  return (dispatch) => {
    axios.delete("/deleteWordFromDictionary", { data: { word_id,dictionary_id } },).then((res) => {
      dispatch(deleteWordActionCreater());
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};