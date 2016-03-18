module.exports = function (req,res,ok) {
	// body...
	console.log("admin policy")
		console.log(req.session.User[0].admin)

	if (req.session.User && req.session.User[0].admin){
		return ok();
	}
	else{
		var requireAdminError = [{name:'requireAdminError',message:'You must be an admin.'}]
		
		req.session.flash = {
			err:requireAdminError
		}
		res.redirect('/session/new');
		return;
	}
}