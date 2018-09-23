var express = require('express');
var router = express.Router();

//mysql
var mysql = require("mysql");

// database connection
global.connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password: '',
		port: '3306',
		database: 'db_dsis',
		connectionLimit : 10,
		multipleStatements : true
});
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
	global.connection.query('SELECT * from dsis_hse_simper', function (error, results, fields) {
		if (error) {
			console.log('aw');
			throw error;
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
  
});

module.exports = router;
