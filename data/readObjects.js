//readObjects.js
(function (readObjects) {
    var fs = require("fs-extra");
    var config = require("./configFile.js");
    
    
    readObjects.fetchWorkspaceData = function (next) {
     fs.readJson(config.workspacePath, function (err, outPutObject) {
        
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