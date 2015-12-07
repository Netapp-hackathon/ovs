// database.js

(function (database){
    
    var mongodb = require("mongodb");
    
    var mongodUrl = "mongodb://localhost:27017/Testdb1";
    var OVSdb = null;

    database.getDb = function (next) {
        if (!OVSdb) {
            // connect to database
            mongodb.MongoClient.connect(mongodUrl, function (err, db)
                {
                if (err) {
                    next(err, null);
                    }
                    else {
                        OVSdb = {
                        db : db,
                        // create an array(collection of data)
                        elements : db.collection("elements")

                    };
                        next(null, OVSdb);
                    }
                });
        }
        else {
            next(null, OVSdb);
        }
    };

} )(module.exports);