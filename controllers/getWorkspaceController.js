//getWorkspaceController.js

(function (getWorkspaceController) {
    
    var database = require("../data");
    getWorkspaceController.init = function (app) {        
        app.get("/api/workspace", function (req, res) {
            var url = req.url;            
            var params = parseValue(url);
            var user = params["username"];           
            var returnres = true;

            database.getWorkSpaces(function (err, results) {
                if (results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].username == user) {
                            returnres = false;
                            //results[i].push({ err : { errNo : 0, errMsg : "Success" } });
                            res.json( { result : results[i],  err : { errNo : 0, errMsg : "Success" }});
                        }
                    }
                    if (returnres)
                        res.json({ err : { errNo : -1, errMsg : "Unable to find workspaces for user " + user } });
                }
                else{ res.json({ err : { errNo : 0, errMsg : "Failure" } });}
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