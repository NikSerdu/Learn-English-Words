const response = require("../response");
const db = require("../settings/db");
const config = require("../config");

exports.getAllWords = (req, res) => {
  db.query("SELECT * FROM `word_list`", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res);
    } else {
      response.status(200, rows, res);
    }
  });
};

exports.getGroups = (req, res) => {
  db.query("SELECT * FROM `groups`", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res);
    } else {
      response.status(200, rows, res);
    }
  });
};

exports.getWordsInGroup = (req,res) => {
  const group_id=req.query.group_id
  if (group_id!=='2' && group_id!=='1') {
    const sql = `SELECT id,word,translate,is_favourite FROM (SELECT word_list.id, word_list.word, word_list.translate, groups.id AS group_id, word_list.is_favourite FROM word_group LEFT JOIN word_list ON (word_list.id = word_group.word_id) LEFT JOIN groups ON (groups.id = word_group.group_id)) AS new_table WHERE group_id=?`
    db.query(sql,group_id, (error,rows) => {
      if (error) {
        response.status(400, error, res);
      } else {
        response.status(200, rows, res);
      }
    })
  } else if (group_id==='2') {
    const sql = `SELECT id,word,translate,is_favourite FROM word_list WHERE is_favourite=1`
    db.query(sql, (error,rows) => {
      if (error) {
        response.status(400, error, res);
      } else {
        response.status(200, rows, res);
      }
    })
  } else {
    const sql = `SELECT id,word,translate FROM word_list`
    db.query(sql, (error,rows) => {
      if (error) {
        response.status(400, error, res);
      } else {
        response.status(200, rows, res);
      }
    })
  }
}