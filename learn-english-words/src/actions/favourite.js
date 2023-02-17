import axios from "axios";
import {  updateWordActionCreater } from "../redux/reducers/favourite-reducer";




export const changeFavourite = (word_id,isFavourite) => {
  return (dispatch) => {
    axios.put("/isFavourite", { word_id,isFavourite },).then((res) => {
      dispatch(updateWordActionCreater());
      console.log(res.data.values.message)
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};