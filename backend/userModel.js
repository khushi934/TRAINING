const mongoose = require('mongoose')
const studentSchema = new mongoose.schema({
    name:String,
    email:String,
    password:String

})
module.exports=mongoose.model("Students",studentSchema)