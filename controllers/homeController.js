(function (homeController) {
    
    var data = require("../data");
   
    homeController.init = function (app) { 

        app.get("/", function (req, res) {
                    
            data.FeedDatabase(function (err, result) {
                if (err)
                    console.log(err);
                else
                    res.json(JSON.stringify(result));
            });

            data.createOpsCommand(function (err, result) {
                if (err)
                    console.log(err);
                else
                    res.json(JSON.stringify(result));
            });
            
        });
    };
})(module.exports);