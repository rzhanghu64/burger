var connection = require("../config/connection.js");

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(error, res) {
      if (error) throw error;
      callback(res);
    });
  },

  insertOne: function(table, col, val, callback) {
    var queryString =
      "INSERT INTO " + table + " (" + col + ") VALUES ('" + val + "')";
    connection.query(queryString, function(error, res) {
      if (error) throw error;
      callback(res);
    });
  },

  updateOne: function(table, newVal, condition, callback) {
      var queryString = "UPDATE " + table + " SET " + "devoured = " + newVal + " WHERE " + condition;
      connection.query(queryString, function(error, res) {
        if (error) throw error;
        callback(res);
      });
  }
};

module.exports = orm;
