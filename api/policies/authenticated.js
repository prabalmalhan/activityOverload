module.exports = function (req,res,ok) {
	// body...


	if (req.session.authenticated){
		return ok()
	}
	else{
		var requireLoginError = [{name:"requireLoginError",message:"You must be signed in"}]

		req.session.flash = {
			err:requireLoginError
		}
		res.redirect('/session/new')
		return
	}
}