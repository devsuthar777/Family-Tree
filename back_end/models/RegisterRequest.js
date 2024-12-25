const mongoose=require('mongoose');

const RegisterRequestSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    emailPhone:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    otp:{
        type:Number,
        required: true,
    },
    authorised:{
        type:Boolean,
        required:true
    },
    createdAt: {
    type: Date,
    default: Date.now, 
    expires: 180,  
  },
})

module.exports =mongoose.model("RegisterRequest",RegisterRequestSchema)