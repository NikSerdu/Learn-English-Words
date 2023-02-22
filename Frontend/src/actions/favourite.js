import axios from "axios";
import {  updateWordActionCreater } from "../redux/reducers/favourite-reducer";




export const changeFavourite = (word_id,isFavourite) => {
  return (dispatch) => {
    axios.put("/toggleFavourite", { word_id,isFavourite },).then((res) => {
      dispatch(updateWordActionCreater());
    }).catch((res) => {console.log(res.response.data.values.message)});
  };
};