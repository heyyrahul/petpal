const jwt = require("jsonwebtoken")
const {BlackListModel} = require("../model/blacklist.model")
const {UserModel} = require("../model/user.model")

const auth = async(req,res,next) => {
	const token = req.headers.authorization?.split(" ")[1]
	const blackToken = await BlackListModel.findOne({token})
		if(blackToken){
			res.status(200).json({msg:"Login Again for access"})
		}
	
	if (token) {
		jwt.verify(token,process.env.Key, async(err,decoded) => {
				try{
					if (decoded) {
						const{userId} = decoded;
						const user = await UserModel.findOne({_id:userId});
						 req.role = user.role;
						 req.id = user._id;
						 
						console.log(decoded,user);
						next();
					}
					else{
						res.status(400).json({msg:err,token})
					}
				}
				catch(e){
					res.status(400).json({msg:e})
				}
			
			})
		
	} else {
		res.json({msg:"You are not Authorised"})
	}
}

module.exports = {
	auth
}