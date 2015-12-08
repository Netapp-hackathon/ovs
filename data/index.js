(function (data) { 

    var database = require("./database.js");
    var cmnds = require("../models/ovs.ops.server.model.js");
    var readObjects = require("./readObjects.js");
    var usertoobjects = require("../models/ovs.usertodata.server.model.js");
    var readOps = require("./readOps.js");
    var config = require("./configFile.js");

    data.getOpCategories = function (next) {     
        database.getDb(function (err, db) {            
            if (err) {
                console.log("Unable to read the database");
                next(err, null);
            }
            else {
                console.log("Read the database");
                // Provide details in the find method on what to look out for
                db.cmnds.find().toArray(function (err, results) {
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

    function FeedDatabase() {
        database.getDb(function (err, db) {
            
            if (err) {
                console.log("Failed to get the database" + err);
            }
            else {
                
              
                    
                    readObjects.fetchWorkspaceData(function (err, userDataJsonObject) {
                        if (err) {
                            console.log("Unale to read the file, Error : " + err);
                        }
                        else {
                            db.usertoobjects.remove();
                            
                            for (var index = 0; index < userDataJsonObject.length ; index++) {
                                console.log(userDataJsonObject[index]);
                                
                                var objectsEntry = new usertoobjects(userDataJsonObject[index]);
                                objectsEntry.save(function (err, objectsEntry) {
                                    if (err) return console.error(err);
                                    console.log(objectsEntry);
                                });
                            }
                        }
                    });
               
                
              
                    readOps.fetchOpsData(function (err, opsJsonObject) {
                        if (err) {
                            console.log("Unale to read the file, Error : " + err);
                        }
                        else {
                            db.cmnds.remove();
                            for (var index = 0; index < opsJsonObject.length ; index++) {
                                console.log(opsJsonObject[index]);
                                
                                var entry = new cmnds(opsJsonObject[index]);
                                entry.save(function (err, entry) {
                                    if (err) return console.error(err);
                                    console.log(entry);
                                });
                            }
                        }
                    });

             
        
            }
        });
        }FeedDatabase();    
    
})(module.exports);