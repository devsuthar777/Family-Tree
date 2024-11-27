const Person = require('../../models/Person');
const mongoose = require('mongoose');


exports.createPerson = async(req,res) => {
   try {
    const {name,gender,birthOrder,dob,occupation,father,lineage,nativePlace,mother,brothers,sisters,spouse} = req.body;



    const Person = await Person.create({name,gender,birthOrder,dob:dob.replaceAll("/","-"),lineage,nativePlace});

    if(!Person) return res.status(400).json({
        success:false,
        message:"Something wrong with request! Please try again!"
    })

      return res.status(200).json({
        success:true,
        message:'Person created!',
        body:Person
      })
   }
   catch(error)
   {    
        console.log("PersonError",error);
        return res.status(500).json({
            success:true,
            message:'Something went wrong!'
        })
   }
}

exports.updatePerson = async(req,res) => {
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
            message:"Invalid Person Id!"
        })

        const updatedPerson = await Person.findByIdAndUpdate(id,{$set : {title:newTitle}});

        if(!updatedPerson) return resizeTo.status(400).json({
            success:false,
            message:'No such Person exists!'
        })

        return res.status(200).json({
            success:true,
            message:"Person Updated!"
        })

    }
    catch(error)
    {
        console.log("updatePerson",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

exports.deletePerson = async(req,res) => {
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
            message:"Invalid Person Id!"
        })

           const deletedPerson = await Person.findByIdAndDelete(id);

            if (!deletedPerson) {
            return res.status(400).json({
                success:false,
                message:"No such Person exists!"
             })
            }

            return res.status(200).json({
                succcess:true,
                message:"Person deleted!"
            })
     }
     catch(error)
    {
        console.log("deletePerson",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
     

}

exports.getAllPerson = async(req,res) => {

    try
    {
        const allPerson = await Person.find();

        if(!allPerson) return res.status(404).json({
            success:false,
            message:"Persons not found!"
        })

        return res.status(200).json({
            success:true,
            message:"Retrieved successfully!",
            body:allPerson
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