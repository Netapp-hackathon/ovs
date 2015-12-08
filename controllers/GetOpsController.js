﻿//OpCommandController.js

(function (GetOpsController) {
    
    var database = require("../data");
    GetOpsController.init = function (app) {
             
        app.get("/api/Ops", function (req, res) {
            
             database.getOpCategories(function (err, results) {
                
                res.set("Content-type", "application/json");
                res.status(200).send(results);
        });
        });
    }

})(module.exports);