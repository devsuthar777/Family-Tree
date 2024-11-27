const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    secondName:{
        type:String,
        required:true,
        trim:true
    },
    emailPhoneNumber:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    linkedPerson:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    },
    userType:{
        type:String,
        enum:['Admin','Guest','User'],
        required:true
    }
})