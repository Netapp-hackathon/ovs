//getResultsController.js

(function (getResultsController) {
    
    var database = require("../data");
    var returnres = true;
    getResultsController.init = function (app) {
        
        app.get("/api/results/:executionId", function (req, res) {
            
            database.getResultsById(function (err, results) {
                if (results) {
                    var eId = parseInt(req.params.executionId.split(":")[1])
                    for (var index = 0; index < results.length; index++) {
                        if (results[index].executionId == eId) {
                            returnres = false;                            
                            res.json({ result : results[index], err: {errNo : 0, errMsg : "Success"}});
                        }
                    }
                    if (returnres)
                        res.json({ err : { errNo : -1, errMsg : "Result file for execution ID " + eId + " not available still" } });
                }
                else {
                    res.json({ err : { errNo : 0, errMsg : "Failure" } });
                }
            });
        });
    }

})(module.exports);