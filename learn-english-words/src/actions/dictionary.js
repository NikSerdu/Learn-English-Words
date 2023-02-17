import axios from "axios";
import {
  addWordActionCreater,
  addWordInGroupActionCreater,
  deleteWordActionCreater,
  getWordsActionCreater,
  getWordsInGroupActionCreater,
} from "../redux/reducers/dictionary-reducer";


export const getAllWords = () => {
  return (dispatch) => {
    axios.get("/getWords").then((response) => {
      dispatch(getWordsActionCreater(response.data.values));
    });
  };
};


export const getWordsInGroup = (group_id) => {
  return (dispatch) => {
    axios.get("/getWordsInGroup",{params:{group_id}}).then((response) => {
      dispatch(getWordsInGroupActionCreater(response.data.values));
    });
  };
};

export const addWord = (word, translate,group_id) => {
  return (dispatch) => {
    axios.post("/addWord", { word, translate },).then((res) => {
      dispatch(addWordActionCreater(word, translate));
      console.log(res.data.values.message)
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};

export const addWordInGroup = (word, translate,group_id) => {
  return (dispatch) => {
    axios.post("/addWordInGroup", { word, translate,group_id },).then((res) => {
      dispatch(addWordInGroupActionCreater());
      console.log(res.data.values.message)
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};



export const deleteWord = (word_id) => {
  return (dispatch) => {
    axios.delete("/deleteWord", { data: { word_id } },).then((res) => {
      dispatch(deleteWordActionCreater());
      console.log(res.data.values.message)
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};

export const deleteWordFromGroup = (word_id,group_id) => {
  return (dispatch) => {
    axios.delete("/deleteWordFromGroup", { data: { word_id,group_id } },).then((res) => {
      dispatch(deleteWordActionCreater());
      console.log(res.data.values.message)
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};