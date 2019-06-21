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
        var hbsObject = {
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
            res.redirect("/burgers");
        });
});

// put - updateOne
router.put("/burgers/update/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    
    burger.updateOne(
        {devoured: req.body.devoured}, 
        condition, function() {
            res.redirect("/burgers");
        });
});

//delete - deleteOne
router.delete("/burgers/delete/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    
    burger.deleteOne(condition, function() {
        res.redirect("/burgers");
    });
});


// exports routes for server.js
module.exports = router;