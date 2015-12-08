//readOps.js
(function (readOps) {
    var fs = require("fs-extra");
    var OpsPath = "C:\\Users\\suseendr\\Desktop\\Json\\Ops.json";  // currently the path is hardcoded, and will be made configurable.   
    
    readOps.fetchOpsData = function (next) {
        fs.readJson(OpsPath, function (err, outPutObject) {
            
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