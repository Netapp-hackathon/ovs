//readObjects.js
(function (readObjects) {
    var fs = require("fs-extra");
    var workspacePath = "C:\\Users\\suseendr\\Desktop\\Json\\test3.json";  // currently the path is hardcoded, and will be made configurable.
    
    
    readObjects.fetchWorkspaceData = function (next) {
     fs.readJson(workspacePath, function (err, outPutObject) {
        
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