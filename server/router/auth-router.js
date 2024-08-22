const express = require("express");
const router=express.Router();

const {register,login}=require("../controller/auth-controller");



router.route("/").post(register);
router.route("/Login").post(login);

module.exports=router;