//getWorkspaceController.js

(function (getWorkspaceController) {
    
    var database = require("../data");
    getWorkspaceController.init = function (app) {
        
        app.get("/api/Workspace", function (req, res) {
            var url = req.url;            
            var params = parseValue(url);
            var user = params["username"];
            
            database.getOpCategories(function (err, results) {
                
                for (var i = 0; i < results[0].elements.length; i++) {
                    if (results[0].elements[i].UserName == user)
                        var obj = results[0].elements[i].workspaceNames;
                }
                res.set("Content-type", "application/json");
                res.status(200).send(obj);
            });
        });
}

function parseValue(url)
{
        var vars = {};
            if (url.length !== 0)
                url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                    key = decodeURIComponent(key);
                    if (typeof vars[key] === "undefined") { vars[key] = decodeURIComponent(value); }
                    else { vars[key] = [].concat(vars[key], decodeURIComponent(value)); }
                });
            return vars;
}

})(module.exports);