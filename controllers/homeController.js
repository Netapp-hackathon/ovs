(function (homeController) {
    
    
    var data = require("../data");
    homeController.init = function (app) { 

        app.get("/", function (req, res) {
            
            data.getOpCategories(function (err, results) { 
           
                res.render("vash/index", { title : "Express + vash", error: err, categories : results });
            });    
        });
    };
})(module.exports);