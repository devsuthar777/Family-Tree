const mongoose= require('mongoose');

const lineageSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true,
            trim:true,
        },
        descedents:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Person'
            }
        ]
})

module.exports = mongoose.model('Lineage',lineageSchema);