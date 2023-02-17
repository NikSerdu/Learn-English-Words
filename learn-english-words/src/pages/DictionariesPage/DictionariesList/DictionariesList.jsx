import React, { useEffect, useState } from "react";
import DictionaryCard from "../../../components/DictionaryCard/DictionaryCard";
import styles from "./DictionariesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewGroup, deleteGroup, getGroups } from "../../../actions/dictionaries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Popup } from "../../../components/Popup/Popup";
import { ToBack } from "../../../components/ToBack/ToBack";
import { useLocalStorage } from "../../../hooks/useLocalStorage";


export const DictionariesList = () => {
  const isChange = useSelector(state => state.dictionaries.isChange)
  const [text, setText] = useState('')
  const groups = useSelector((state) => state.dictionaries.groups);
  const [learn_group_id, setLearnGroupId] = useLocalStorage('learn_group_id')
  const dispatch = useDispatch();
  const [showPopup,togglePopup] = useState(false)
  useEffect(() => {
    dispatch(getGroups());
  }, [isChange]);

  const handleAddNewGroup = () => {
    if (text !== '') {
      dispatch(addNewGroup(text))
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
          <h1>Add new group</h1>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter group name"/>
          <div className={styles.btn} onClick={handleAddNewGroup}>Add</div>
        </div>
      </Popup> : null}
    <ToBack />


      <div className={styles.dictionaries}>
        <h1>Dictionaries</h1>
        <div className={styles.wrap}>
          <div className={styles.addGroup} onClick={() => {togglePopup(!showPopup)}}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </div>

          {groups.map((elem) => {
            return (
              <DictionaryCard
                key={elem.id}
                link={`dictionary/${elem.group_name}/${elem.id}`}
                text={elem.group_name}
                id={elem.id}
                deleteGroup={deleteGroup}
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
