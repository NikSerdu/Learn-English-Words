import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import styles from "./TableItem.module.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export const TableItem = ({
  id,
  word,
  translate,
  isFavourite,
  isResults,
  deleteWord,
  deleteWordFromDictionary,
  changeFavourite
}) => {
  const dispatch = useDispatch();
  const {dictionary_name, dictionary_id} = useParams()
  const handlerDeleteWord = () => {
    dispatch(deleteWord(id));
  };
  const handlerDeleteWordFromDictionary = () => {
    dispatch(deleteWordFromDictionary(id,dictionary_id));
  };
  const addToFavourite = () => {
    if (!isFavourite) {
      dispatch(changeFavourite(id,1));
    } else {
      dispatch(changeFavourite(id,0));
    }
  };
  return (
    <tr>
      <td>{word}</td>
      <td>{translate}</td>
      <td>
        {!isResults && dictionary_id !== '2' && (
          <FontAwesomeIcon icon={faXmark} onClick={handlerDeleteWord} title="Удалить слово полностью"/>
        )}
        {!isResults && (
          <FontAwesomeIcon
            icon={isFavourite ? faStarSolid : faStarRegular}
            onClick={addToFavourite}
            title={isFavourite ? "Удалить из избранного" : "В избранное"}
          />
        )}
        {!isResults && dictionary_id !== '1' && dictionary_id !== '2' && (
          <FontAwesomeIcon icon={faXmark} onClick={handlerDeleteWordFromDictionary} title="Удалить из группы"/>
        )}
      </td>
    </tr>
  );
};
