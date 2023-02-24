import React, { useEffect, useState } from "react";
import DictionaryCard from "../../../components/DictionaryCard/DictionaryCard";
import styles from "./DictionariesList.module.css";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Popup } from "../../../components/Popup/Popup";
import { ToBack } from "../../../components/ToBack/ToBack";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { addNewDictionary, deleteDictionary, getDictionaries } from "../../../actions/dictionaries";


export const DictionariesList = () => {
  const isChange = useSelector(state => state.dictionaries.isChange)
  const [text, setText] = useState('')
  const dictionaries = useSelector((state) => state.dictionaries.dictionaries);
  const [learn_group_id, setLearnGroupId] = useLocalStorage('learn_group_id')
  const dispatch = useDispatch();
  const [showPopup,togglePopup] = useState(false)
  useEffect(() => {
    dispatch(getDictionaries());
  }, [isChange]);

  const handlerAddNewGroup = () => {
    if (text !== '') {
      dispatch(addNewDictionary(text))
      togglePopup(!showPopup)
      setText('')
    } else {
      console.log('Заполните полностью поле!')
    }
  }


  return (
    <>
      {showPopup ? <Popup closePopup={() => {togglePopup(!showPopup)}}>
        <div className="form">
          <h1>Add a new group</h1>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter group name"/>
          <div className={styles.btn} onClick={handlerAddNewGroup}>Add</div>
        </div>
      </Popup> : null}
    <ToBack />


      <div className={styles.dictionaries}>
        <h1>Dictionaries</h1>
        <div className={styles.wrap}>
          <div className={styles.addGroup} onClick={() => {togglePopup(!showPopup)}}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </div>

          {dictionaries.map((elem) => {
            return (
              <DictionaryCard
                key={elem.id}
                link={`dictionary/${elem.dictionary_name}/${elem.id}`}
                text={elem.dictionary_name}
                id={elem.id}
                deleteGroup={deleteDictionary}
                learn_group_id={learn_group_id}
                setLearnGroupId={setLearnGroupId}
              />
            );
          })}
          
        </div>
      </div>
    </>
  );
};
