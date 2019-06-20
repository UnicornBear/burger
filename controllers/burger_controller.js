// import (require) express
var express = require("express");
var router = express.Router();


// import (require) burger.js
var burger = require("../models/burger.js");

// get
router.get("/", function(req,res) {
    res.redirect("/burgers");
});

// get selectAll
router.get("/burgers", function(req,res) {
    burgers.selectAll(function(data) {
        var hbsobject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post insertOne
router.post("/burgers/create", function(req,res) {
    burger.insertOne(
        ["burger_name"], 
        [req.body.name],
        function() {
            res.redirect("/burger");
        });
});

// put - updateOne
router.put("/burgers/update", function(req,res) {
    
});

//delete - deleteOne


// exports routes for server.js
module.exports = router;