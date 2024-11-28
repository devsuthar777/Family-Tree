const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    code:{
        type:Number
    },
    nativePeople:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    }],
    inLawsPeople:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    }],
    maternalPeople:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    }]
})

module.exports=mongoose.model('Village',villageSchema);