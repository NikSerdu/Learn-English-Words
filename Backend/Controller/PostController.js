const response = require("../response");
const db = require("../settings/db");

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

exports.addWordInGroup = (req, res) => {
  const word = req.body.word;
  const translate = req.body.translate;
  const group_id = req.body.group_id;
  db.query(
    "SELECT word, translate FROM `word_list` WHERE word=?",
    [word],
    (error, rows, results) => {
      if (error) {
        response.status(400, error, res);
      } else if (typeof rows !== "undefined" && rows.length > 0) {
        const sql =
          "INSERT INTO `word_group` (word_id, group_id) VALUES ((SELECT id FROM `word_list` WHERE word = ? ),?)";
        db.query(sql, [word, group_id], (error, results) => {
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
              "INSERT INTO `word_group` (word_id, group_id) VALUES ((SELECT id FROM `word_list` WHERE word = ? ),?)";
            db.query(sql, [word, group_id], (error, results) => {
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

exports.addNewGroup = (req, res) => {
  const group_name = req.body.group_name;
  const sql = 'SELECT group_name FROM groups WHERE group_name=?'
  db.query(sql, group_name, (error, rows,results) => {
    if (error) {
      response.status(400, error, res);
    } else if (typeof rows !== "undefined" && rows.length > 0) {
      response.status(
        302,
        { message: `Группа с таким названием уже существует!`, results },
        res
      );
      return true;
    } else {
      const sql = 'INSERT INTO groups (group_name) VALUES(?)'
      db.query(sql,group_name, (error,results) => {
        if (error) {
          response.status(400,error,res)
        } else {
          response.status(
            200,
            { message: `Группа успешно добавлена!`, results },
            res
          );
        }
      })
    }
  });
};


