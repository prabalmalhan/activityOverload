/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

'new':function(req,res){
	
	res.view();
	
},
'create':function(req,res,next){

	//model has a create function(auto created by sails )pass all params 
	User.create(req.params.all(),function usercreated(err,user){
		//if error then return error
		if (err) {
			console.log(err);
			req.session.flash={
				err:err
			}
		
		

		return res.redirect('/user/new');
		}
		req.session.authenticated = true
		req.session.User = user

		user.online = true;

		user.save(function(err,user){
			if (err) return next(err);
		

		//else return user in json format
		//res.json(user);
		//req.session.flash = {};
		//res.json(user);
		res.redirect('/user/show/'+user.id);	
		})
	});	
},

show:function(req,res,next){

	User.find({id: req.params['id'], limit: 1})
    .then(function foundUser(user){
        if(!user) return next();
        res.view({
            user: user[0]

        });
      
    })
    .catch(function(err){
        if(err) return next(err);
    });
},
index:function(req,res,next){

	// console.log(req.session)
	// console.log(new Date())
	User.find(function foundUsers(err,users){
		if (err) return next(err);

	
		res.view({
			users:users
		});
	});


},
edit:function(req,res,next){
	 User.find({id: req.params['id'], limit: 1})
    .then(function foundUser(user){
        if(!user) return next('User doesnt exist');
     
        res.view({
            user: user[0]
        });
    })
    .catch(function(err){
        if(err) return next(err);
    });
},
update:function(req,res,next){
	if (req.session.User.admin){
		var userObject = {
			name:req.param('name'),
			title:req.param('title'),
			email:req.param('email'),
			admin:req.param('admin')

		}
	}else{
			var userObject = {
			name:req.param('name'),
			title:req.param('title'),
			email:req.param('email')
			

		}
		}
	

	User.update(req.params['id'],userObject,function userUpdated(err){
		if (err){
			return res.redirect('/user/edit/'+req.params['id']);
		}
		res.redirect('/user/show/'+req.params['id']);
	})

},
destroy:function(req,res,next){

	 User.find({id: req.params['id'], limit: 1})

    .then(function foundUser(user){
     
    	
        if(!user) return next('user doesnt exist');
        User.destroy(req.params['id'],function userDestroyed(err){
        	if (err) return next(err);
        });
    })
    .catch(function(err){
        if(err) return next(err);
    });
    res.redirect('/user/')
}
};


