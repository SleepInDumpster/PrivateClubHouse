const {body, validationResult} = require('express-validator');
const User = require("../models/user");
const bcrypt = require('bcryptjs');


exports.newMessage_get = function(req,res){
    res.render("newMessage",{title: new Message});
}