var mongoose = require("mongoose")
var User = mongoose.model("User")

module.exports = {
	index: function(req, res){
		if (!req.session.count){
			req.session.count = 1
		} else {
			req.session.count++
		}
		res.render("index", {count: req.session.count})
	},

	login: function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if(err){ 
				console.log(err)
				res.json(err)
				return
			}

			if(user){
				req.session.user_id = user._id
				res.redirect("/success")
			} else {
				var new_user = new User({name: req.body.name})
				new_user.save(function(err){
					if(err){
						console.log(err)
						res.json(err)
						return
					}

					req.session.user_id = new_user._id
					res.redirect("/success")
				})
			}


		})

	},

	success: (req, res) => {
		if(!req.session.user_id){
			res.redirect("/")
		} else {
			User.findOne({_id: req.session.user_id}, function(err, user){
				if(err){
					console.log(err)
					res.json(err)
				} else {
					res.render("success", {user: user})
				}
			})
		}
	},

	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}