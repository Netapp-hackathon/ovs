//OpCommandController.js

(function (GetOpsController) {
    
    var database = require("../data");
    GetOpsController.init = function (app) {
             
        app.get("/api/ops", function (req, res) {
            
            database.getOpCategories(function (err, results) {
                if (results) {
                    results.push({ err : { errNo : 0, errMsg : "Success" } });
                    res.json(results);
                }
                else {
                    res.json({ err : { errNo : 0, errMsg : "Failure" } });
                }
        });
        });
    }

})(module.exports);