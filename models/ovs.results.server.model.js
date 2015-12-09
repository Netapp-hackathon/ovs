var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Schemas for Op Commands
var resultsSchema = new Schema({
    errNo : Number,
    errMessage : String

});

module.exports = mongoose.model("results", resultsSchema);