var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schemas for User to Workspace to Vsims
var userToDataSchema = new Schema({    
    username : String,
    ws : [{
            wsName : String,
            wsId : Number
                    }],    
    vsims : [{
            vsimName : String,
            vsimId : Number
                }]
  
});

module.exports = mongoose.model("usertoobjects", userToDataSchema);