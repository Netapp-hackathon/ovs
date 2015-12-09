(function (controllers) {
    
    
    var homeController = require("./homeController.js");
    var getOpsController = require("./GetOpsController.js");
    var getWorkspaceController = require("./getWorkspaceController.js");
    var postOpsController = require("./postOpController.js");
    var getResultsController = require("./getResultsController.js");
    controllers.init = function (app) {
        homeController.init(app);
        getOpsController.init(app);
        getWorkspaceController.init(app);
        postOpsController.init(app);
        getResultsController.init(app);
    };

})(module.exports);