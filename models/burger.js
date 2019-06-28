var orm = require("../config/orm");

var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  create: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },

  update: function(newVal, condition, callback) {
    orm.updateOne("burgers", newVal, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
