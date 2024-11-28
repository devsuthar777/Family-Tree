const Village = require('../../models/Village');
const mongoose = require('mongoose');


exports.createVillage = async(req,res) => {
   try {
      const {title} = req.body;
      if(!title) return res.status(400).json({
        success:false,
        message:'Title is missing!'
      })

     const existVillage = await Village.findOne({title});

     //conflicate 409 error
    if(existVillage) return res.status(409).json({
        success:false,
        message:`Village ${title} already exists!`
    })

    const village = await Village.create({title});

      return res.status(200).json({
        success:true,
        message:'Village created!'
      })
   }
   catch(error)
   {    
        console.log("VillageError",error);
        return res.status(500).json({
            success:true,
            message:'Something went wrong!'
        })
   }
}

exports.updateVillage = async(req,res) => {
    try
    {
        const {newTitle,id} = req.body;

        if(!newTitle || !id) return res.status(400).json({
            success:false,
            message:'Incomplete request'
        });

        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

        if(!isValidObjectId) return res.status(400).json({
            succcess:false,
            message:"Invalid Village Id!"
        })
        
        const updatedVillage = await Village.findByIdAndUpdate(id,{$set : {title:newTitle}});

        if(!updatedVillage) return res.status(400).json({
            success:false,
            message:'No such Village exists!'
        })

        return res.status(200).json({
            success:true,
            message:"Village Updated!"
        })

    }
    catch(error)
    {
        console.log("updateVillage",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

exports.deleteVillage = async(req,res) => {
     const {id} = req.body;

     try
     {
           if(!id) return res.status(400).json({
            succcess:false,
            message:"Request incomplete!"
           });

        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

        if(!isValidObjectId) return res.status(400).json({
            succcess:false,
            message:"Invalid Village Id!"
        })

           const deletedVillage = await Village.findByIdAndDelete(id);

            if (!deletedVillage) {
            return res.status(400).json({
                success:false,
                message:"No such Village exists!"
             })
            }

            return res.status(200).json({
                succcess:true,
                message:"Village deleted!"
            })
     }
     catch(error)
    {
        console.log("deleteVillage",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
     

}

exports.getAllVillages = async(req,res) => {

    try
    {
        const allVillage = await Village.find();

        if(!allVillage) return res.status(404).json({
            success:false,
            message:"Villages not found!"
        })

        return res.status(200).json({
            success:true,
            message:"Retrieved successfully!",
            body:allVillage
        })
    }
    catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })
    }

}