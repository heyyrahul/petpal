const express = require("express");
const { PetModel } = require("../model/pet.model");
const { auth } = require("../middlewares/auth.middleware")
const {access} = require("../middlewares/access.middleware")
const petRouter = express.Router();


petRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        console.log("Fetching pet with ID:", id);
        const pets = await PetModel.find({_id:id});
        console.log("Found pets:", pets);
        if (pets.length === 0) {
            return res.status(404).json({ message: "Pet not found" });
        }
        res.status(200).json({ pets });
    } catch (e) {
        console.error("Error fetching pet:", e);
        res.status(500).json({ message: "Internal server error" });
    }
});



petRouter.get("/", async (req, res) => {
    const { page } = req.query
    const limitValue = 8
    const skipValue = (limitValue*page)-limitValue
    try {
        if(page){
            const pets = await PetModel.find().skip(skipValue).limit(limitValue);
            res.status(200).json({ msg:"pagination wala pet ",pets });
        }
        else{
            const pets = await PetModel.find();
            res.status(200).json({ pets });
        }
        
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});



petRouter.post("/",auth,access("admin"),async (req, res) => {
    const payload = req.body;
    try {
        const pet = new PetModel(payload);
        await pet.save();
        res.status(200).json({ msg: "Data has been added" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

petRouter.patch("/:id",auth,access("admin"),async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        await PetModel.findByIdAndUpdate(id, payload, { new: true });
        res.status(200).json({ msg: "Data has been updated" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

petRouter.delete("/:id",auth,access("admin"), async (req, res) => {
    const { id } = req.params;
    try {
        await PetModel.findByIdAndDelete(id);
        res.status(200).json({ msg: "Data has been deleted" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});



module.exports = {
    petRouter
};
