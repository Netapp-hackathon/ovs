//getResultsController.js

(function (getResultsController) {
    
    var database = require("../data");
    var returnres = true;
    getResultsController.init = function (app) {
        
        app.get("/api/results/:executionId", function (req, res) {
            
            database.getResultsById(function (err, results) {
                var eId = parseInt(req.params.executionId.split(":")[1])
                for (var index = 0; index < results.length; index++) {
                    if (results[index].executionId == eId) {
                        returnres = false;
                        res.json(JSON.stringify(results[index]));
                    }                               
                }
                if(returnres)
                res.json({ err : { errNo : -1, errMsg : "Result file for execution ID " + eId + " not available still" } });
            });
        });
    }

})(module.exports);