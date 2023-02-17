const response = require("../response");
const db = require("../settings/db");

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

exports.deleteWordFromGroup = (req, res) => {
  db.query(
    "SELECT `word_id`, `group_id` FROM `word_group` ",
    (error, rows, fields) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const word_id = req.body.word_id;
        const group_id = req.body.group_id;
        const sql = `DELETE FROM word_group WHERE word_id=? and group_id=?`;
        db.query(sql, [word_id, group_id], (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            response.status(
              200,
              { message: `Слово успешно удалено из группы!`, results },
              res
            );
          }
        });
      }
    }
  );
};

exports.deleteGroup = (req, res) => {
  const group_id = req.body.group_id;
  const sql = "DELETE FROM word_group WHERE group_id=?";
  db.query(sql, group_id, (error, results) => {
    if (error) {
      response.status(400, error, res);
    } else {
      const sql = "DELETE FROM groups WHERE id=?";
      db.query(sql, group_id, (error, results) => {
        if (error) {
          response.status(400, error, res);
        } else {
          response.status(
            200,
            { message: `Группа успешно удалена!`, results },
            res
          );
        }
      });
    }
  });
};
