var mysql = require("mysql");

var connection;

if (process.env.DATABASE_URL) {
  connection = mysql.createConnection(process.env.DATABASE_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

connection.connect(function(error) {
  if (error) {
    console.error(error);
    return;
  } else {
    console.log("connected ID: " + connection.threadId);
  }
});

module.exports = connection;
