var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Schemas for User to Workspace to Vsims
var userToDataSchema = new Schema({    
    userName : String,
    workSpaceName : String,
    workSpaceId : Number,    
    vsimName : String,
    vsimId : Number
});

module.exports = mongoose.model("usertoobjects", userToDataSchema);