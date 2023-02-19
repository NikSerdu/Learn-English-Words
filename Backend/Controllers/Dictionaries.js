const response = require("../response");
const db = require("../settings/db");

exports.getDictionaries = (req, res) => {
  db.query("SELECT * FROM `groups`", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res);
    } else {
      response.status(200, rows, res);
    }
  });
};

exports.addNewDictionary = (req, res) => {
  const dictionary_name = req.body.dictionary_name;
  const sql = "SELECT group_name FROM groups WHERE group_name=?";
  db.query(sql, dictionary_name, (error, rows, results) => {
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
      const sql = "INSERT INTO groups (group_name) VALUES(?)";
      db.query(sql, dictionary_name, (error, results) => {
        if (error) {
          response.status(400, error, res);
        } else {
          response.status(
            200,
            { message: `Группа успешно добавлена!`, results },
            res
          );
        }
      });
    }
  });
};

exports.deleteDictionary = (req, res) => {
    const dictionary_id = req.body.group_id;
    const sql = "DELETE FROM word_group WHERE group_id=?";
    db.query(sql, dictionary_id, (error, results) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const sql = "DELETE FROM groups WHERE id=?";
        db.query(sql, dictionary_id, (error, results) => {
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