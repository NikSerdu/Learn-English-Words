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
  deleteWordFromGroup,
  changeFavourite
}) => {
  const dispatch = useDispatch();
  const {group_name, group_id} = useParams()
  const handleDeleteWord = () => {
    dispatch(deleteWord(id));
  };
  const handleDeleteWordFromGroup = () => {
    dispatch(deleteWordFromGroup(id,group_id));
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
        {!isResults && group_id !== '2' && (
          <FontAwesomeIcon icon={faXmark} onClick={handleDeleteWord} title="Удалить слово полностью"/>
        )}
        {!isResults && (
          <FontAwesomeIcon
            icon={isFavourite ? faStarSolid : faStarRegular}
            onClick={addToFavourite}
            title={isFavourite ? "Удалить из избранного" : "В избранное"}
          />
        )}
        {!isResults && group_id !== '1' && group_id !== '2' && (
          <FontAwesomeIcon icon={faXmark} onClick={handleDeleteWordFromGroup} title="Удалить из группы"/>
        )}
      </td>
    </tr>
  );
};
