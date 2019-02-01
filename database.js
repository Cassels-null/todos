var mysql = require('mysql');

var db = mysql.createConnection({
  user     : 'student',
  password : 'FILL_ME_IN',
  database : 'todo_db'
});
 
db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

module.exports = db;