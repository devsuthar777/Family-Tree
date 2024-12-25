const express = require('express');
const { createrUserReq, verifyRegisterReq } = require('../../controllers/userControllers/userRegister');
const {loginUser} = require("./../../controllers/userControllers/userLogin");
const router = express.Router();



router.post("/register/createRegisterReq",createrUserReq);
router.post("/register/verifyRegisterReq",verifyRegisterReq);
router.post("/loginUser",loginUser);


module.exports=router;