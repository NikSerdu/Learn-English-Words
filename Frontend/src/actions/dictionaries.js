import axios from "axios";
import { addNewDictionaryActionCreater, deleteDictionaryActionCreater, getDictionariesActionCreater } from "../redux/reducers/dictionaries-reducer";


export const getDictionaries = () => {
  return (dispatch) => {
    axios.get("/getDictionaries").then((response) => {
      dispatch(getDictionariesActionCreater(response.data.values));
    });
  };
};

export const addNewDictionary = (dictionary_name) => {
  return (dispatch) => {
    axios.post("/AddNewDictionary", {dictionary_name}).then((response) => {
      dispatch(addNewDictionaryActionCreater());
    });
  };
};

export const deleteDictionary = (dictionary_id) => {
  return (dispatch) => {
    axios.delete("/deleteDictionary", { data: { dictionary_id } }).then((response) => {
      dispatch(deleteDictionaryActionCreater());
    });
  };
};