const mongoose = require("mongoose") 
const YearSchema = mongoose.Schema({ 
 Day: {type:String,required:true}, 
 Week: {type:Number, min:1,max:31},
 Month: {type:String,required:true}
}) 
 
module.exports = mongoose.model("Year", YearSchema) 