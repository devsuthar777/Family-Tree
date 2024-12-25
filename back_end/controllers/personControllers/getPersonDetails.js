const mongoose = require("mongoose");
const Person = require("../../models/Person");

exports.getPersonDetails = async (req,res) => {
    const {id}  = req.params;
    console.log(id);
    try{
            const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

            if(!isValidObjectId) return res.status(400).json({
                succcess:false,
                message:"Invalid Person Id!"
            })
            const personDetails = await Person.findById(id).populate("lineage","title").
            populate("nativePlace","title").populate("maternalPlace","title").populate("father").populate("mother").populate("sisters").populate("brothers");

            if(!personDetails) return res.status(404).json({
                success:false,
                message:"Person not found"
            })

            return res.status(200).json({
                success:true,
                message:"Details fetched!",
                body:personDetails
            })
    }   
    catch(error)
    {
        console.log("getDetails",error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })

    }    
}