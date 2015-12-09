(function (data) { 

    var database = require("./database.js");
    var cmnds = require("../models/ovs.ops.server.model.js");
    var readObjects = require("./readObjects.js");
    var usertoobjects = require("../models/ovs.usertodata.server.model.js");
    var results = require("../models/ovs.results.server.model.js");
    var readOps = require("./readOps.js");
    var config = require("./configFile.js");
    var fs = require("fs-extra");
    var fsextra = require("fs.extra");
    var readResults = require("./readResults.js");

    data.getOpCategories = function (next) {
            console.log("Read the database");
        // Provide details in the find method on what to look out for
        cmnds.find({}, {_id:0}, function (err, results) {
            if (err) {
                next(err, null);
            }
            else {
                next(null, results);
            }
        });            
    };
    
    data.getWorkSpaces = function (next) {
         console.log("Read the database");
        // Provide details in the find method on what to look out for
        usertoobjects.find({}, {_id:0}, function (err, results) {
            if (err) {
                next(err, null);
            }
            else {
                next(null, results);
            }
        });          
    };
    
    data.getResultsById = function (next) {        
        console.log("Read the database");
        // Provide details in the find method on what to look out for
        results.find({}, {_id:0}, function (err, results) {
            if (err) {
                next(err, null);
            }
            else {
                next(null, results);
            }
        });           
    };    
    
    data.createOpsCommand = function (next){

        setInterval(function () {
            if (config.commandsToRun.length > 0) {
                var sourcefileName = config.infilePath + "work_" + config.inFileCounter + ".json";
                var destinationfileName = config.airlockFilePath + "work_" + config.inFileCounter + ".json";
                fs.writeFile(sourcefileName, JSON.stringify(config.commandsToRun), function (err) {
                    if (err)
                        console.log(err);
                    else {
                        console.log("File " + sourcefileName + " Created successfully");
                        config.inFileCounter++;
                        fsextra.copy(sourcefileName, destinationfileName, function (err) {
                            if (err) {
                                next(err, null)
                                console.log(err);
                            }
                        });
                    }
                });
                config.commandsToRun = [];              
                
                    }
            }, config.inFileTimeInterval);
    }

    data.FeedDatabase = function (next) {
                    setInterval(function () {
                        readObjects.fetchWorkspaceData(function (err, userDataJsonObject) 
                        {
                            if (err) 
                                {
                                console.log("Unale to read the file, Error : " + err);
                                }
                            else {
                                    usertoobjects.remove(function (err, removed) { 
                                        if (err)
                                            console.log(err);
                                        else {
                            for (var index = 0; index < userDataJsonObject.length ; index++) 
                                {
                                        console.log(userDataJsonObject[index]);
                                

                                var objectsEntry = new usertoobjects({ username : userDataJsonObject[index].username });
                                for (var wCount = 0 ; wCount < userDataJsonObject[index].ws.length ; wCount++) {
                                    objectsEntry.ws.push({ wsName : userDataJsonObject[index].ws[wCount].wsName, wsId : userDataJsonObject[index].ws[wCount].wsId });
                                }
                                for (var vCount = 0; vCount < userDataJsonObject[index].vsims.length; vCount++ ) {
                                    objectsEntry.vsims.push({
                                        vsimName : userDataJsonObject[index].vsims[vCount].vsimName, vsimId : userDataJsonObject[index].vsims[vCount].vsimId
                                    });
                                }
                                console.log(objectsEntry.toObject());
                                        objectsEntry.save(function (err, objectsEntry) {
                                            if (err) return console.error(err);
                                            console.log(objectsEntry);
                                        });
                                    }
                                    }
                                    });
                                 }
                    });
                
                
                    readOps.fetchOpsData(function (err, opsJsonObject) {
                        if (err) {
                            console.log("Unale to read the file, Error : " + err);
                        }
                        else {
                    cmnds.remove(function (err, removed) {
                        if (err)
                            console.log("error" + err);
                        else {
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


                readResults.fetchResultsData(function (err, resultJsonObject) {
                if (err) {
                    console.log("Unale to read the file, Error : " + err);
                }
                else {
                    results.remove(function (err, removed) {
                        if (err)
                            console.log("error " + err);
                        else {
                            for (var index = 0; index < resultJsonObject.length ; index++) {
                                console.log(resultJsonObject[index]);
                                
                                var result = new results({ errMessage : resultJsonObject[index].errMessage , errNo : resultJsonObject[index].errNo});
                                result.save(function (err, result) {
                                    if (err) return console.error(err);
                                    console.log(result);
                                });
                            }

                        }
                    });
                }
                });              
            }, config.opsTimeInterval);            
    };
})(module.exports);