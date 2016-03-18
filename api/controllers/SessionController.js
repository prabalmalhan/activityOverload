/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//var bcrypt = require(bcrypt);
module.exports = {

'new':function (req,res) {
	// var oldDate = new Date();
	// var newDate = new Date(oldDate.getTime() + 60000);
	// req.session.cookie.expires = newDate;

	// req.session.authenticated = true;
	// console.log(req.session

	res.view();

},
'create':function(req,res,next){
	var values = req.allParams()
	if (!values['email'] || !values['password']){
		
		var userNamePasswordRequiredError = [{name:"UserNamePasswordRequired", message:"Please Enter Username and password"}]
		
		req.session.flash={
			err:userNamePasswordRequiredError
		}
		res.redirect('/session/new')
		return;
	}

	 User.find({email: values['email'], limit: 1})
    .then(function foundUser(user){
         
         if (_.isEmpty(user)){
			console.log(user)
			var noUserError = [{name:"no Account", message:"No user found with that email"}]
			req.session.flash={
				err:noUserError
			};
			res.redirect('/session/new')
			return;
		}
		
		require('bcrypt').compare(values['password'],user[0].encryptedPassword,function(err,valid){
			// if (err) res.redirect('/session/new')
			
			if (!valid){
				var incorrectPassword = [{name:"incorrectPassword",message:"Please Chek username and password"}]
				req.session.flash={
					err:incorrectPassword
				};
				res.redirect('/session/new')
				return ;
			}
			
			req.session.authenticated = true
			req.session.User = user

			user[0].online = true;
			singleUser = user[0]
	
			singleUser.save(function(err,singleUser){
			if (err) return next(err);
			if (req.session.User.admin){
				res.redirect('/user');
				return;
			}
			res.redirect('/user/show/'+user[0].id)
			})
		});
		
    })
    .catch(function(error){
    	
        if(error) {
	
		var noUserError = [{name:"no Account", message:"No user found with that email"}]
		req.session.flash={
			err:error
		};
		res.redirect('/session/new')
		}
    	
    });


},

destroy:function(req,res,next){
	var values = req.allParams()
	 User.find({email: values['email'], limit: 1})
    .then(function foundUser(user){
         
     var userId = req.session.User.id;
     User.update(userId,{
     	online:false
     },function(err){
     	if (err) return next(err);
     	req.session.destroy()

	res.redirect('/session/new')
     })
		
    })
    .catch(function(error){
    	
        if(error) {
	
		var noUserError = [{name:"no Account", message:"No user found with that email"}]
		req.session.flash={
			err:error
		};
		res.redirect('/session/new')
		}
    	
    });
	
}

	
};

