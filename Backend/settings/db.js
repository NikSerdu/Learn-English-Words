const mysql = require('mysql')
const config = require('../config')

const connection = mysql.createConnection({
    host: config.HOST,
    user: config.DBUSER,
    password: config.DBPASSWORD,
    database: config.DBNAME
})

connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД!');
    } else {
        return console.log('Подключение успешно!');
    }
})

module.exports = connection