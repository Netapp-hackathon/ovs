//postOpsContoller.js

(function (postOpsController) {
    var config = require("../data/configFile.js");
    var database = require("../data");
    postOpsController.init = function (app) {
        app.post("/api/ops", function (req, res) {
            var reqObject = req.body;
            reqObject["executionId"] = config.executionIdCounter;
            config.executionIdCounter++;
            config.commandsToRun.push(reqObject);
            res.json({ err : { errNo : 0, errMsg : "Command request recieved" }, executionId : config.executionIdCounter});
        });
    }
})(module.exports);