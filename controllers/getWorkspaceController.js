//getWorkspaceController.js

(function (getWorkspaceController) {
    
    var database = require("../data");
    getWorkspaceController.init = function (app) {
        
        app.get("/api/Workspace", function (req, res) {
            
            var username = "suseendr";
            database.getOpCategories(function (err, results) {
                
                var obj = results[0].elements.find({ UserName : "suseendr" });
                
                res.set("Content-type", "application/json");
                res.status(200).send(obj.workspaceNames);
                res.render("vash/index", { title : "Express + vash", error: err, categories : results });
            
           
            });
        });
    }

})(module.exports);