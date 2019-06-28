var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.selectAll("burger_db.burgers", function(res) {
      callback(res);
    });
  },

  create: function(cols, vals, callback) {
    orm.insertOne("burger_db.burgers", cols, vals, function(res) {
      callback(res);
    });
  },

  update: function(newVal, condition, callback) {
    orm.updateOne("burger_db.burgers", newVal, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
