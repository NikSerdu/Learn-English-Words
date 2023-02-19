const response = require("../response");
const db = require("../settings/db");

exports.getAllWords = (req, res) => {
  db.query("SELECT * FROM `word_list`", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res);
    } else {
      response.status(200, rows, res);
    }
  });
};

exports.addWord = (req, res) => {
  db.query(
    "SELECT `word`, `translate` FROM `word_list` WHERE `word` = '" +
      req.body.word +
      "'",
    (error, rows, results) => {
      if (error) {
        response.status(400, error, res);
      } else if (typeof rows !== "undefined" && rows.length > 0) {
        response.status(
          302,
          { message: `Слово уже существует!`, results },
          res
        );
        return true;
      } else {
        const word = req.body.word;
        const translate = req.body.translate;

        const sql =
          "INSERT INTO `word_list`(`word`, `translate`) VALUES('" +
          word +
          "', '" +
          translate +
          "')";
        db.query(sql, (error, results) => {
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
    }
  );
};

exports.toggleFavourite = (req, res) => {
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

exports.deleteWord = (req, res) => {
  db.query(
    "SELECT `word`, `translate` FROM `word_list` ",
    (error, rows, fields) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const word_id = req.body.word_id;
        const sql = `DELETE FROM word_group WHERE word_id=?`;
        db.query(sql, word_id, (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            const sql = `DELETE FROM word_list WHERE id=?`;
            db.query(sql, word_id, (error, results) => {
              if (error) {
                response.status(400, error, res);
              } else {
                response.status(
                  200,
                  { message: `Слово успешно удалено!`, results },
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