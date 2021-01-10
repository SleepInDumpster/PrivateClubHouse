const {body, validationResult} = require('express-validator');
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const passport = require('passport');



exports.signUp_get = function(req,res) {
    res.render('sign-up',{title: "Sign up to clubhouse"});
}

exports.singUp_post = [
    body("username").trim().isLength({min: 1}).escape().withMessage("username must be specified"),
    body('password').trim().isLength({min: 5}).escape().withMessage("password must be minimum 5 characters long"),
    body("firstName").trim().isLength({min:1}).escape().withMessage("First name must be specified"),
    body('lastName').trim().isLength({min: 1}).escape().withMessage("Last name must be specified"),

    (req,res,next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.render('sign-up',{title: "Sign up to clubhouse", errors: errors.array()});
        }else{

            
            bcrypt.hash(req.body.password,10,(err,hashedPassword) => {
                if(err) {return next(err);}

             const user = new User(
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    password: hashedPassword,
                    isPrivateMember: false,
                    
                }
            ).save(err => {
                if(err) {return next(err);}
                res.redirect("/");
            })
        })


        }
    }
];

exports.logIn_get = function(req,res){
    res.render("log-in",{title: "Log In"});
}
exports.logOut_get = function(req,res){
    req.logout();
    res.redirect("/");
}

exports.dashboard = function(req,res){
    
    res.render('index',{title: "DashBoard"});
}