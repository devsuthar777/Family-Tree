const Lineage = require('../../models/Lineage');
const mongoose = require('mongoose');


exports.createLineage = async(req,res) => {
   try {
      const {title} = req.body;
      if(!title) return res.status(400).json({
        success:false,
        message:'Title is missing!'
      })

     const existLineage = await Lineage.find({title});

     //conflicate 409 error
    if(existLineage) return res.status(409).json({
        success:false,
        message:"Lineage already exists!"
    })

    const lineage = await Lineage.create({title});

      return res.status(200).json({
        success:true,
        message:'Gotra/Lineage created!'
      })
   }
   catch(error)
   {    
        console.log("LineageError",error);
        return res.status(500).json({
            success:true,
            message:'Something went wrong!'
        })
   }
}

exports.updateLineage = async(req,res) => {
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
            message:"Invalid Lineage Id!"
        })

        const updatedLineage = await Lineage.findByIdAndUpdate(id,{$set : {title:newTitle}});

        if(!updatedLineage) return resizeTo.status(400).json({
            success:false,
            message:'No such Lineage exists!'
        })

        return res.status(200).json({
            success:true,
            message:"Lineage Updated!"
        })

    }
    catch(error)
    {
        console.log("updateLineage",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

exports.deleteLineage = async(req,res) => {
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
            message:"Invalid Lineage Id!"
        })

           const deletedLineage = await Lineage.findByIdAndDelete(id);

            if (!deletedLineage) {
            return res.status(400).json({
                success:false,
                message:"No such Lineage exists!"
             })
            }

            return res.status(200).json({
                succcess:true,
                message:"Lineage deleted!"
            })
     }
     catch(error)
    {
        console.log("deleteLineage",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
     

}

exports.getAllLineage = async(req,res) => {

    try
    {
        const allLineage = await Lineage.find();

        if(!allLineage) return res.status(404).json({
            success:false,
            message:"Lineages not found!"
        })

        return res.status(200).json({
            success:true,
            message:"Retrieved successfully!",
            body:allLineage
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