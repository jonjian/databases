var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.userid, messages.roomid, messages.text, users.username where messages.id = users.id';
      db.query(queryStr, (err, results) => {
        callback(err, results)
      })
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into messages(userid, text, roomid) values ((select id from users where username = ?), ?, (select id from rooms where roomname = ?))';
      db.query(queryStr, params, (err, results) => {
        callback(err, results)
      })
    }
     // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users'
      db.query(queryStr, (err, results) => {
        callback(err, results)
      })
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)'
      db.query(queryStr, params, (err, results) => {
        callback(err, results)
      })
    }
  }
};

