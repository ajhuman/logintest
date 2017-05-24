var users = require("./../controllers/users")

module.exports = function(app){
	app.get("/", users.index)
	app.post("/login", users.login)
	app.get("/success", users.success)
	app.get("/logout", users.logout)
}