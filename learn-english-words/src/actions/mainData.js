import axios from "axios";
import {
  getWordsActionCreater,
} from "../redux/reducers/mainData-reducer";

export const getWords = (group_id) => {
  return (dispatch) => {
    axios.get("/getWordsInGroup",{params:{group_id}}).then((response) => {
      dispatch(getWordsActionCreater(response.data.values));
      console.log('Слова обновлены!')
    });
  };
};


