// database.js

(function (database){
    
    var mongodb = require("mongodb");
    var mongoose = require("mongoose");
    
    mongoose.connect("mongodb://localhost:27017/MongoseDbTest1");
    
    var OVSdb = null;
    
        database.getDb = function (next) {
        if (!OVSdb) {
            
            //connect to databas via mongoose
            var db = mongoose.connection;
            OVSdb = {
                db : db,
                cmnds : db.collection("cmnds"),
                usertoobjects : db.collection("usertoobjects")
            };
            next(null, OVSdb);
        }
        else {
            next(null, OVSdb);
        }
    };

} )(module.exports);