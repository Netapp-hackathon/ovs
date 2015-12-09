var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Schemas for Op Commands
// make it as OpName
var opsSchema = new Schema({    
    opName : String,
    opDescr : String,
    opId : Number,
    opCategory : String,
    opType : String,
    opParams : Object,
    opParamsReq : Boolean
});

module.exports = mongoose.model("cmnds", opsSchema);
