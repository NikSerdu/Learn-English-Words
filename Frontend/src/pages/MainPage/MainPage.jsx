import styles from "./MainPage.module.css";
import ButtonMode from "../../components/ButtonMode/ButtonMode";
import { useDispatch, useSelector } from "react-redux";
import { getWords } from "../../actions/mainData";
import { useEffect } from "react";
import dictionary from "./../../assets/images/dictionary.png";
import { NavLink } from "react-router-dom";
import { reset } from "../../actions/eng-rus-random";
import { useLocalStorage } from "../../hooks/useLocalStorage";
function MainPage(params) {
  const [learn_group_id] = useLocalStorage('learn_group_id',1)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWords(learn_group_id));
    dispatch(reset())
  }, []);
  return (
    <>
      <div className={styles.dictionary}>
        <NavLink to="/dictionaries">
          <img src={dictionary} alt="Dictionary" />
        </NavLink>
      </div>
      <div className={styles.wrap}>
        <ButtonMode link="/eng-rus" text="ENG RUS" violet={true} />
        <ButtonMode link="/rus-eng" text="RUS ENG" orange={true} />
        <ButtonMode link="/random" text="RANDOM WORDS" />
        <ButtonMode link="/choose-translate-on-rus" text="CHOOSE RUSSIAN TRANSLATE" violet={true} />
        <ButtonMode link="/choose-translate-on-eng" text="CHOOSE ENGLISH TRANSLATE" />
      </div>
    </>
  );
}
export default MainPage;
