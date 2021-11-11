const mongoose = require("mongoose") 
const YearSchema = mongoose.Schema({ 
 Day: String, 
 Week: String, 
 Month: String, 
}) 
 
module.exports = mongoose.model("Year", YearSchema) 