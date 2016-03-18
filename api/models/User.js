/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema:true,
  attributes: {

  	name:{
  		type:'string',
  		required: true

  	},
  	title:{
  		type:'string'
  	},
  	email:{
  		type:'email',
  		required: true
  		
  	},
    admin:{
      type: 'boolean',
      defaultsTo: false

    },
    online:{
      type:'boolean',
     defaultsTo: false          
    },
  	encryptedPassword:{
  		type:'string'
  	}
  },


  //either this or scheme = true
  // toJson:function(){
  //   var user = this.toObject();
  //   delete user.encryptedPassword;
  //   delete user.password;
  //   delete user.confirmation;
  //   delete user.csrf;
  //   return user;
  // }

  beforeCreate:function(values,next){
    if (!values.password || values.password != values.confirmation){
      return next({err:["Password doesnt Match password confirmation."]});
    }
    require('bcrypt').hash(values.password,10,function passwordEncrypted(err,encryptedPassword){
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });

  }
};

