const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../model/user.model")
const {BlackListModel} = require("../model/blacklist.model")
const { auth } = require("../middlewares/auth.middleware")
const {access} = require("../middlewares/access.middleware")

const userRouter = express.Router()


userRouter.post("/register", async(req,res) => {
	
	try {
		const { username, email, pass, role, age} = req.body
		let email1 = await UserModel.findOne({email:email});
		if(email1){
			res.status(200).json({msg:"You are already registered please log in"})
		}
		else{
			bcrypt.hash(pass, 5, async(err, hash) => {
				if (err) {
					res.status(200).json({err})
				} else {
					const user = new UserModel({
						username,
						email,
						role,
						age,
						pass: hash
					})
					await user.save()
					res.status(200).json({msg:"The new user has been registered!"})
				}})
		}
		
		
	} catch(err) {
		res.status(400).json({err})
	}
})

userRouter.post("/login", async(req,res) => {
	const { email, pass } = req.body
	try {
		const user = await UserModel.findOne({email})
		if (user) {
			bcrypt.compare(pass, user.pass, (err, result) => {
				if (result) {
					// const token = jwt.sign({course:'nem104'},'masai');
					res.status(200).json({msg:"Login Successful!",token:jwt.sign({userId:user._id,name:user.name},process.env.Key)})
				} else {
					res.status(400).json({msg: "Password does not match"})
				}
			})
		} else {
			res.status(400).json({msg: "Wrong Credentials"})
		}
	} catch(err) {
		res.status(400).json({err})
	}
})

userRouter.post("/logout",auth,async(req,res)=>{
	const token = req.headers.authorization;
	try{
		const blacklist = new BlackListModel({
			token
		});
		await blacklist.save();
		res.status(200).json({msg:"Logout Successful!"})
	}
	catch(e){
		res.status(400).json({err})
	}
})

userRouter.get("/",auth,access("admin"),async(req,res)=>{
	try{
		const user = await UserModel.find();
		res.status(200).json({user});
	}
	catch(e){
		res.status(400).json({err})
	}
})

userRouter.get("/:id",auth,access("admin"),async(req,res)=>{
	const { id } = req.params
	try{
		console.log(id);
		const user = await UserModel.find({_id:id});
		res.status(200).json({user});
	}
	catch(e){
		res.status(400).json({e})
	}
})

userRouter.delete("/:id",auth,access("admin"),async(req,res)=>{
	const { id } = req.params
	try{
		const user = await UserModel.findByIdAndDelete({_id:id});
		res.status(200).json({msg:"User Deleted"});
	}
	catch(e){
		res.status(400).json({e})
	}
})

userRouter.patch("/:id",auth,access("admin"),async(req,res)=>{
	const { id } = req.params
	const payload = req.body
	try{
		const user = await UserModel.findByIdAndUpdate(id, payload, { new: true });
		res.status(200).json({msg:"User updaated"});
	}
	catch(e){
		res.status(400).json({e})
	}
})

module.exports = {
	userRouter  
}