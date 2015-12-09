//readResults.js
(function (readResults) {
    var fs = require("fs-extra");
    var config = require("./configFile.js");    
    
    readResults.fetchResultsData = function (next) {
        fs.readJson(config.resultsPath, function (err, outPutObject) {
            
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