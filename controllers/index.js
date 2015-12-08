(function (controllers) {
    
    
    var homeController = require("./homeController.js");
    //var OpCommandController = require("./OpCommandController.js");
    var getOpsController = require("./GetOpsController.js");
    var getWorkspaceController = require("./getWorkspaceController.js");
    //var readDataFromAirlock = require("./readDataFromAirlock.js");
    controllers.init = function (app) {

        homeController.init(app);
        //OpCommandController.init(app);
        getOpsController.init(app);
        getWorkspaceController.init(app);
       // readDataFromAirlock.init(app);
    };

})(module.exports);