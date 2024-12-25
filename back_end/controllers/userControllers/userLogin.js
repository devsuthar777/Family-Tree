const User = require("../../models/User");
const bcrypt = require("bcryptjs")
const jsonwebtoken = require('jsonwebtoken');
exports.loginUser = async (req,res) => {


    try
    {
        const {emailPhone,password} = req.body;

        if(!emailPhone || !password) return res.status(400).json({
            success:false,
            message:"All details are required!"
        })

        let userData = await User.findOne({emailPhoneNumber:emailPhone});
        if(!userData) return res.status(404).json({
            success:false,
            message:"User doesn't exists against! Please register.",
            navigate:true
        })

        
        if(!(await bcrypt.compare(password,userData.password))) return res.status(403).json({
            success:false,
            message:"Invalid Password!"
        })

        const payload = {
            emailPhone:userData.email,
            id:userData._id,
            firstName:userData.firstName,
            userType:userData.userType
        }

        let token = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{
            expiresIn: "1h"
         })

        const options ={
            //expires: new Date(Date.now() + 3*24*60*60*1000),
            expires: new Date(Date.now() + 5*60*1000),
            httpOnly:true,
         }

         userData = userData.toObject();

         userData.password = undefined;
         userData.token = token;

         return res.cookie("token",token,options).status(200).json({
            success:true,
            message:"Login successful",
            userData,
            token   
         })

    }
    catch(error)
    {
        console.log(error);

        return res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })
    }  
       
}