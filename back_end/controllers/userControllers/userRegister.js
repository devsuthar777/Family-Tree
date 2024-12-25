const User = require("../../models/User");
const RegisterRequest = require('../../models/RegisterRequest');
const bcrypt = require("bcryptjs")

const otpGenerator = require('otp-generator');
const { sendOtpMessage } = require("../../config/messageService");
const { default: mongoose } = require("mongoose");
const sendMail = require('../../config/mailService');


exports.createrUserReq = async (req,res) => {
    const {firstName,lastName,emailPhone,password} = req.body

    

    try
    {
        if (!firstName || !lastName || !emailPhone || !password) {
            return res.status(400).json({
              success: false,
              message: "All details are required!",
            });
          }
    
        const existingUser = await User.findOne({emailPhoneNumber:emailPhone});
    
        if(existingUser) return res.status(409).json({
            success:false,
            message:"User already registered!"
        });
    
        let hashedPassword;
    
        try
        {
            hashedPassword = await bcrypt.hash(password,10);   

        }
        catch(error)
        {
            console.log(error);
            return res.status(500).json({
                success:false,
                message:"Please try with different password!"
            })
        }
    

        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            digits:true,
            lowerCaseAlphabets:false

          });
        
   
       const request = await RegisterRequest.create({firstName,lastName,emailPhone,password:hashedPassword,otp:Number(otp),authorised:false});


        if(!emailPhone.includes("@")) {
    
            
           if(request)
           {
                
                try
                {
                    const message  =  await sendOtpMessage(emailPhone,otp);
                    
                    return res.status(200).json({
                        success:true,
                        message:"Please check your whatsApp! OTP sent.",
                        body:{requestId:request._id}
                    })
    
                }
                catch(error)
                {
                    console.log(error);
                    return res.status(400).json({success:false,message:"Invalid phone number!"});
    
                }
                
                
    
           }
    
           else return res.status(500).json({
            success:false,
            message:"Oops! Please try again"
           })
    
        
    
        }
        else
        {
            //email logic

            if(request)
                {
                     
                     try
                     {
                         const message  =  await sendMail(emailPhone,"Family Tree User Creation : OTP",`Please don't share with else, OTP : ${otp}`);
                         
                         return res.status(200).json({
                             success:true,
                             message:"Please check your email! OTP sent.",
                             body:{requestId:request._id}
                         })
         
                     }
                     catch(error)
                     {
                         console.log(error);
                         return res.status(400).json({success:false,message:"Invalid email address!"});
         
                     }
                     
                     
         
                }
         
                else return res.status(500).json({
                 success:false,
                 message:"Oops! Please try again"
                })

        }
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Oops! Please try again"
           });
    }


};


exports.verifyRegisterReq = async (req,res) => {
    const {reqId,otp} = req.body

    try
    {
        if (!reqId || !otp) {
            return res.status(400).json({
              success: false,
              message: "All details are required!",
            });
          }

        if(!mongoose.Types.ObjectId.isValid(reqId)) return res.status(400).json({
            success: false,
            message: "Invalid request Id!",
          });
    
        const existingRegId = await RegisterRequest.findById(reqId);
        if(!existingRegId) return res.status(409).json({
            success:false,
            message:"OTP expired! please try again",
            navigate:true
        });
    
        if(existingRegId.otp != Number(otp)) return res.status(400).json({
            success: false,
            message: "Invalid OTP!",
          })
        
        const user = await User.create({
            firstName:existingRegId.firstName,
            lastName:existingRegId.lastName,
            emailPhoneNumber:existingRegId.emailPhone,
            password:existingRegId.password,
            userType:'User'
        });


        if(user){
            return res.status(200).json({
                success:true,
                message:"Registration complete! Please login!"
            })
        }
    
        
    
        
        
    
        
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Oops! Please try again"
           });
    }


};