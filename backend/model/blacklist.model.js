const mongoose = require("mongoose");

const blacklistSchema = mongoose.Schema({
    token:{type:String}
},{
    versionKey:false
});

const BlackListModel = mongoose.model("blacklist",blacklistSchema);

module.exports = {
    BlackListModel
}