// routes/auth.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const {createUser,getUser,logoutUser,loginUser}=require("../controllers/user")
router.post('/signup',createUser)
router.post('/login', passport.authenticate("local", { failureRedirect: "/signup", sucessRedirect: "/" }),loginUser)
router.get('/allUser/:userId',getUser)
router.get('/logout',logoutUser)
module.exports = router;
