// database.js

(function (database){    
    var mongodb = require("mongodb");
    var mongoose = require("mongoose");    
    mongoose.connect("mongodb://localhost:27017/MongoseDbTest1");
} )(module.exports);