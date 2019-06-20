
// set up connection to mySQL
var mysql = require("mysql");

// create connection to the mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1Password!324",
    database: "burgers_db"
});

// make connection (success or fail)
connection.connect(function(err) {
    if (err) {
        console.log("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connection Succes as ID: " + connection.threadId);
});

// export out the connection for our ORM
module.exports = connection;