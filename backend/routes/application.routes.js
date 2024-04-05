const express = require("express");
const { ApplicationModel } = require("../model/application.model");
const { auth } = require("../middlewares/auth.middleware")
const applicationRouter = express.Router();
const{PetModel} = require("../model/pet.model")
const {access} = require("../middlewares/access.middleware")

applicationRouter.post("/:petId",auth,async(req,res)=>{
    const { petId } = req.params
    const payload = req.body
    const userId = req.id
    const petData= await PetModel.findOne({_id:petId});
    console.log(petData);
    try{
const {_id:petId,name:petName,age:petAge,color,gender:petGender,url,description,isAdopted}= petData
        const application = new ApplicationModel({
            ...payload,
            petId,
            petName,
            petAge,
            color,
            petGender,
            url,
            description,
            isAdopted,
            userId
        })
        await application.save();
        res.status(200).json({msg:"Application sent"})
    }
    catch(e){
        res.status(400).json({e})
    }

})
// admin get route
applicationRouter.get("/",auth,access("admin"), async(req,res)=>{
    try{
        const application = await ApplicationModel.find()
		res.status(200).json({application})
    }
    catch(e){
        res.status(400).json({e})
    }
})

applicationRouter.patch("/update/:id",auth,access("admin"),async(req,res)=>{
    const { id } = req.params
    const payload = req.body
    try{
        const application = await ApplicationModel.findByIdAndUpdate(id,payload,{new:true})
        res.status(200).json({msg:"application updated"});
    }
    catch(e){
        res.status(400).json({e})
    }
})

applicationRouter.delete("/delete/:id",auth,access("admin"),async(req,res)=>{
    const { id } = req.params
    try{
        const application = await ApplicationModel.findByIdAndDelete(id,{new:true})
        res.status(200).json({msg:"application deleted"});
    }
    catch(e){
        res.status(400).json({e})
    }
})

applicationRouter.get("/getApp",auth,async(req,res)=>{
    const userId = req.id;
    try{
        const application = await ApplicationModel.find({userId})
        res.status(200).json({application})
    }
    catch(e){
        res.status(400).json({e})
    }
})

module.exports = {
    applicationRouter
}