const mongoose = require('mongoose');

const personSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        enum:['female','male'],
        required:true,
    },
    birthOrder:{
      type:Number,
      enum:[1,2,3,4,5,6,7,8,9,10,11],
      required:true
    },
    dob:{
        type:Date,
        required:true
    },
    occupation:{
        type:String,
        trim:true
    },
    father:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Person'
    },
    lineage:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Lineage'
    },
    nativePlace:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Village'
    },
    maternalPlace :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Village"
    },
    mother:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    },
    brohters:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    }],
    sisters:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    }],
    spouse:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    },
    profileUrl:{
        type:String
    }


})

module.exports = mongoose.model('Person',personSchema);