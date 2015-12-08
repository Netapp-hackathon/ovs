var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Schemas for Op Commands
var opsSchema = new Schema({    
    opCommandName : String,
    opDescription : String,
    opCommandId : Number,
    opCategory : String
});

module.exports = mongoose.model("cmnds", opsSchema);
