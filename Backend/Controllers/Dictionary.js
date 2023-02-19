const response = require("../response");
const db = require("../settings/db");

exports.getWordsOfDictionary = (req, res) => {
  const dictionary_id = req.query.dictionary_id;
  if (dictionary_id !== "2" && dictionary_id !== "1") {
    const sql = `SELECT id,word,translate,is_favourite FROM (SELECT word_list.id, word_list.word, word_list.translate, dictionaries.id AS dictionary_id, word_list.is_favourite FROM word_dictionary LEFT JOIN word_list ON (word_list.id = word_dictionary.word_id) LEFT JOIN dictionaries ON (dictionaries.id = word_dictionary.dictionary_id)) AS new_table WHERE dictionary_id=?`;
    db.query(sql, dictionary_id, (error, rows) => {
      if (error) {
        response.status(400, error, res);
      } else {
        response.status(200, rows, res);
      }
    });
  } else if (dictionary_id === "2") {
    const sql = `SELECT id,word,translate,is_favourite FROM word_list WHERE is_favourite=1`;
    db.query(sql, (error, rows) => {
      if (error) {
        response.status(400, error, res);
      } else {
        response.status(200, rows, res);
      }
    });
  } else {
    const sql = `SELECT id,word,translate FROM word_list`;
    db.query(sql, (error, rows) => {
      if (error) {
        response.status(400, error, res);
      } else {
        response.status(200, rows, res);
      }
    });
  }
};

exports.addWordInDictionary = (req, res) => {
  const word = req.body.word;
  const translate = req.body.translate;
  const dictionary_id = req.body.dictionary_id;
  db.query(
    "SELECT word, translate FROM `word_list` WHERE word=?",
    [word],
    (error, rows, results) => {
      if (error) {
        response.status(400, error, res);
      } else if (typeof rows !== "undefined" && rows.length > 0) {
        const sql =
          "INSERT INTO `word_dictionary` (word_id, dictionary_id) VALUES ((SELECT id FROM `word_list` WHERE word = ? ),?)";
        db.query(sql, [word, dictionary_id], (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            response.status(
              200,
              { message: `Слово успешно добавлено!`, results },
              res
            );
          }
        });
      } else {
        const sql = "INSERT INTO `word_list` (word,translate) VALUES(?,?)";
        db.query(sql, [word, translate], (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            const sql =
              "INSERT INTO `word_dictionary` (word_id, dictionary_id) VALUES ((SELECT id FROM `word_list` WHERE word = ? ),?)";
            db.query(sql, [word, dictionary_id], (error, results) => {
              if (error) {
                response.status(400, error, res);
              } else {
                response.status(
                  200,
                  { message: `Слово успешно добавлено!`, results },
                  res
                );
              }
            });
          }
        });
      }
    }
  );
};

exports.deleteWordFromDictionary = (req, res) => {
  db.query(
    "SELECT `word_id`, `dictionary_id` FROM `word_dictionary` ",
    (error, rows, fields) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const word_id = req.body.word_id;
        const dictionary_id = req.body.dictionary_id;
        const sql = `DELETE FROM word_dictionary WHERE word_id=? and dictionary_id=?`;
        db.query(sql, [word_id, dictionary_id], (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            response.status(
              200,
              { message: `Слово успешно удалено из словаря!`, results },
              res
            );
          }
        });
      }
    }
  );
};
