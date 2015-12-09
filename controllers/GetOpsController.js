//OpCommandController.js

(function (GetOpsController) {
    
    var database = require("../data");
    GetOpsController.init = function (app) {
             
        app.get("/api/ops", function (req, res) {
            
            database.getOpCategories(function (err, results) {

                res.set("Content-type", "application/json");
                res.json(JSON.stringify(results));
        });
        });
    }

})(module.exports);