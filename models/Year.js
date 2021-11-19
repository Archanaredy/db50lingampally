const mongoose = require("mongoose") 
const YearSchema = mongoose.Schema({ 
 Day: String, 
 Week: Number, 
 Month: String
}) 
 
module.exports = mongoose.model("Year", YearSchema) 