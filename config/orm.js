// import (require) the mysql connection
var connection = require("./connection.js");

// helper function for SQL syntax
function printQuestionMarks(num) {
    var app = [];

    for (var i = 0; i < num; i++) {
        Array.push("?");
    }

    return arr.toString();
 }

 // helper function to convert object key/value pairs to SQL syntax
 function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }



  // ORM
  // takes the helper functions (input & conditions) and tunrs into SQL commands
  
  var orm = {
    // queries all burgers from the table
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function(err,results) {
                if (err) {
                    throw err;
                }
                cb(results);
        });
    },
    
    // creates a new burger to the table
    // vals -- an array of values that we want to save to cols
 	  // cols -- the columns we want to insert the values into
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }  
          cb(result);
        });
    },
    
    // updates record in the table
    // objColVals -- the columns and values that you want to update
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },

    // delete the burger from the table
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    }
};

// export the ORM object
module.exports = orm;