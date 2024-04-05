const mongoose = require("mongoose")

const petSchema = mongoose.Schema({
	type:{type:String,required:true},
    color:{type:String,required:true},
    name:{type:String,required:true},
    age:{type:String,required:true},
    url:{type:String,required:true},
    gender:{type:String,require:true},
    description:{type:String},
    isAdopted:{type:Boolean,default:false}
    
},{
	versionKey: false
})

const PetModel = mongoose.model("pet", petSchema)

module.exports = {
	PetModel
}