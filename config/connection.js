var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  console.log("connected to jawsdb");
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
  });
  console.log("connected to localhost");
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
