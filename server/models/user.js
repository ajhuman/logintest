const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
	user: {type: String, required: true},
	body: {type: String, required: true},
}, {timestamps: true})

const RatSchema = mongoose.Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true},
	comments: [CommentSchema]
}, {timestamps: true})

const UserSchema = mongoose.Schema({
	name: {type: String, required: true},
	rats: [RatSchema]
}, {timestamps: true})

mongoose.model("User", UserSchema)