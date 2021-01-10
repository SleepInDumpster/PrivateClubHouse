var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const passport = require("passport");

/* GET home page. */
router.get('/', userController.dashboard);

router.get('/sign-up', userController.signUp_get);
router.post('/sign-up', userController.singUp_post);

router.get("/log-in", userController.logIn_get);

router.post('/log-in',
passport.authenticate('local',{
  successRedirect: "/",
  failureRedirect: "/log-in"
})
);

router.get("/log-out", userController.logOut_get);

module.exports = router;
