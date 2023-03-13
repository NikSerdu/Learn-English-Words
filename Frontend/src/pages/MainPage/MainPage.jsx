import styles from "./MainPage.module.css";
import ButtonMode from "../../components/ButtonMode/ButtonMode";
import { useDispatch, useSelector } from "react-redux";
import { getWords } from "../../actions/mainData";
import { useEffect } from "react";
import dictionary from "./../../assets/images/dictionary.png";
import { NavLink } from "react-router-dom";
import { changeNumberOfWord, reset } from "../../actions/eng-rus-random";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
function MainPage() {
  const words_length = useSelector((state) => state.mainData.words.length);
  const [learn_group_id] = useLocalStorage("learn_group_id", "1");
  const [startNumber, changeStartNumber] = useLocalStorage(
    "start_number_of_word",
    1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
    dispatch(getWords(learn_group_id));
  }, []);

  useEffect(() => {
    const n = Number(startNumber) > words_length ? words_length : words_length - Number(startNumber);
    dispatch(changeNumberOfWord(n));
  });
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faGraduationCap} />
          WORD<span>UP</span>
        </div>
        <div className={styles.dictionary}>
          <NavLink to="/dictionaries">
            <img src={dictionary} alt="Dictionary" />
          </NavLink>
        </div>
      </div>
      <div className={styles.wrap}>
        <ButtonMode link="/eng-rus" text="ENG RUS" violet={true} />
        <ButtonMode link="/rus-eng" text="RUS ENG" orange={true} />
        <ButtonMode link="/random" text="RANDOM WORDS" />
        {words_length >= 4 ? (
          <ButtonMode
            link="/choose-translate-on-rus"
            text="CHOOSE RUSSIAN TRANSLATE"
            violet={true}
          />
        ) : null}
        {words_length >= 4 ? (
          <ButtonMode
            link="/choose-translate-on-eng"
            text="CHOOSE ENGLISH TRANSLATE"
          />
        ) : null}
      </div>
      <div className={styles.startNumber}>
        <span>Сколько слов повторить:</span>
        <input
          className={styles.startNumber__input}
          type="number"
          min={1}
          max={words_length}
          value={startNumber}
          onChange={(e) =>
            Number(e.target.value) <= words_length
              ? changeStartNumber(e.target.value)
              : console.log("Введите другое число!")
          }
        />
      </div>
    </>
  );
}
export default MainPage;
