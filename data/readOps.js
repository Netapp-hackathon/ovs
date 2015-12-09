//readOps.js
(function (readOps) {
    var fs = require("fs-extra");
    var config = require("./configFile.js");
    
    readOps.fetchOpsData = function (next) {
        fs.readJson(config.OpsPath, function (err, outPutObject) {
            
            if (err) {
                next(err, null);
                console.log("No File present still. Call me back sometime");
            }
            else {
                console.log(outPutObject);
                next(null, outPutObject);
            }
        });
    };
})(module.exports);       