(function (data) { 

    var FeedData = require("./FeedData.js");
    var database = require("./database.js");

    data.getOpCategories = function (next) { 
    
        database.getDb(function (err, db) {
            
            if (err) {
                console.log("Unable to read the database");
                next(err, null);
            }
            else {
                console.log("Read the database");
                // Provide details in the find method on what to look out for
                db.elements.find( { name : "users"}).toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    }
                    else {
                        next(null, results);
                    }
                });
            }
        });
    };

    //storing data

    function FeedDatabase() {
        database.getDb(function (err, db) {
            
            if (err) {
                console.log("Failed to get the database" + err);
            }
            else {
                
                // test to see if the data exists
                db.elements.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve the database");
                    }
                    else {
                        if (count == 0) {
                            console.log("Feeding the database");
                            FeedData.initOpcodes.forEach(function (item) {
                                
                                db.elements.insert(item, function (err) {
                                    if (err) {
                                        console.log("Failed to insert the object");
                                    }
                                });
                            });
                        } else {
                            console.log("Database already seeded");
                        }
                    }
                });
            }
        });
    }
    FeedDatabase();
    
})(module.exports);