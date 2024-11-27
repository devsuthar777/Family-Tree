const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
    tile:{
        type:String,
        required:true
    },
    code:{
        type:Number,
        required:true
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