var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	favorite_band: {type: String, required: false},
}, {timestamps: true})

mongoose.model("User", UserSchema)