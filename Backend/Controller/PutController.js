const response = require("../response");
const db = require("../settings/db");

exports.isFavourite = (req, res) => {
  db.query(
    "SELECT `word`, `translate` FROM `word_list` ",
    (error, rows, fields) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const word_id = req.body.word_id;
        const isFavourite = req.body.isFavourite;
        const sql = "UPDATE word_list SET is_favourite = ? WHERE id= ?";
        db.query(sql, [isFavourite, word_id], (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            response.status(
              200,
              { message: `Слово успешно обновлено!`, results },
              res
            );
          }
        });
      }
    }
  );
};

exports.updateWrongWord = (req, res) => {
  db.query(
    "SELECT `word`, `translate` FROM `wrongwords` ",
    (error, rows, fields) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const id = req.body.id;
        const word = req.body.word;
        const translate = req.body.translate;
        const sql = "UPDATE wrongwords SET word = ?, translate = ? WHERE id= ?";
        db.query(sql, [word, translate, id], (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            response.status(
              200,
              { message: `Слово успешно обновлено!`, results },
              res
            );
          }
        });
      }
    }
  );
};
