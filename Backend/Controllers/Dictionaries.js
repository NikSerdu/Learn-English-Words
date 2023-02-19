const response = require("../response");
const db = require("../settings/db");

exports.getDictionaries = (req, res) => {
  db.query("SELECT * FROM `dictionaries`", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res);
    } else {
      response.status(200, rows, res);
    }
  });
};

exports.addNewDictionary = (req, res) => {
  const dictionary_name = req.body.dictionary_name;
  const sql = "SELECT dictionary_name FROM dictionaries WHERE dictionary_name=?";
  db.query(sql, dictionary_name, (error, rows, results) => {
    if (error) {
      response.status(400, error, res);
    } else if (typeof rows !== "undefined" && rows.length > 0) {
      response.status(
        302,
        { message: `Словарь с таким названием уже существует!`, results },
        res
      );
      return true;
    } else {
      const sql = "INSERT INTO dictionaries (dictionary_name) VALUES(?)";
      db.query(sql, dictionary_name, (error, results) => {
        if (error) {
          response.status(400, error, res);
        } else {
          response.status(
            200,
            { message: `Словарь успешно добавлен!`, results },
            res
          );
        }
      });
    }
  });
};

exports.deleteDictionary = (req, res) => {
    const dictionary_id = req.body.dictionary_id;
    const sql = "DELETE FROM word_dictionary WHERE dictionary_id=?";
    db.query(sql, dictionary_id, (error, results) => {
      if (error) {
        response.status(400, error, res);
      } else {
        const sql = "DELETE FROM dictionaries WHERE id=?";
        db.query(sql, dictionary_id, (error, results) => {
          if (error) {
            response.status(400, error, res);
          } else {
            response.status(
              200,
              { message: `Словарь успешно удалён!`, results },
              res
            );
          }
        });
      }
    });
  };