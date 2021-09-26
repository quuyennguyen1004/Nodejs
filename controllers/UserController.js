var User = require('../models/User');
var Resident = require('../models/Resident');

var userController = {};

userController.login = async function(request,response){
    User.find({name:request.body.name,
    password: request.body.password
    }).exec(async function(err,user){
        if(err){
            console.log("Error",err)
        }
        else{
            if(user.length == 0){
                response.render("../views/index",{tiltle: 'Resident Management',message: "UserName or Password Invalid"});
            }
            else{
                Resident.find({}).exec(async function(err,resident){
                    if(err){
                        console.log("Error", err);
                    }
                    else{
                        response.render("../views/residents/index",{request:resident});
                    }
                });
            }
        }
    });
};

module.exports = userController;