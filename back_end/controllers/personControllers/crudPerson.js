const Person = require('../../models/Person');
const Lineage = require('../../models/Lineage')
const mongoose = require('mongoose');
const Village = require('../../models/Village');


exports.createPerson = async(req,res) => {
   try {
    const {name,gender,birthOrder,dob,occupation,father,lineage,nativePlace,mother,brothers,sisters,spouse} = req.body;

    const personLineage = await Lineage.findOne({title:lineage});

    if(!personLineage) return res.status(400).json({
        success:false,
        message:"No such lineage exists!"
    });

    const personVillage = await Village.findOne({title:nativePlace});

    if(!personVillage) return res.status(400).json({
        success:false,
        message:"No such Native Place exists!"
    });

    const person = await Person.create({name,gender,birthOrder,dob:dob.replaceAll("/","-"),lineage : personLineage._id,nativePlace: personVillage._id});


    if(!person) return res.status(400).json({
        success:false,
        message:"Something wrong with request! Please try again!"
    })

      return res.status(200).json({
        success:true,
        message:'Person created!',
        body:person
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
        const {name,gender,birthOrder,dob,occupation,father,lineage,nativePlace,mother,brothers,sisters,spouse,id} = req.body;


        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

        if(!isValidObjectId) return res.status(400).json({
            succcess:false,
            message:"Invalid Person Id!"
        })

        const personExists = await Person.findById(id);
   
        if(!personExists) return res.status(400).json({
            success:false,
            message:'No such Person exists!'
        });


        const personLineage = await Lineage.findOne({title:lineage});
        if(!personLineage) return res.status(400).json({
            success:false,
            message:"No such lineage exists!"
        });

        const personVillage = await Village.findOne({title:nativePlace});

        if(!personVillage) return res.status(400).json({
            success:false,
            message:"No such native place exists!"
        });


        if(father) 
        {
            const isValidObjectId = mongoose.Types.ObjectId.isValid(mother);
            if(!isValidObjectId) return res.status(400).json({
                success:false,
                message:"Invalid Father Id"
            })

            const fatherExists = Person.findById(father);
            
            if(!fatherExists) return res.status(400).json({
                success:false,
                message:"No such father exists"
            })

        }

        if(mother) 
            {
                const isValidObjectId = mongoose.Types.ObjectId.isValid(mother);
                if(!isValidObjectId) return res.status(400).json({
                    success:false,
                    message:"Invalid Mother Id"
                })
    
                const motherExists = Person.findById(mother);
                
                if(!motherExists) return res.status(400).json({
                    success:false,
                    message:"No such Mother exists"
                })
    
            }
        
        if(spouse) 
        {
            const isValidObjectId = mongoose.Types.ObjectId.isValid(spouse); 
            if(!isValidObjectId) return res.status(400).json({
                success:false,
                message:"Invalid spouse Id"
            })

            const spouseExists = Person.findById(spouse);
            
            if(!spouseExists) return res.status(400).json({
                success:false,
                message:"No such spouse exists"
            })
        }

        //occupation validation

        

        const person = await Person.create(
            {name,gender,birthOrder,
                dob:dob.replaceAll("/","-"),
                brohters:brothers ? brothers : [] ,
                mother,father,sisters: sisters ? sisters : [],
                lineage : personLineage._id,
                nativePlace: personVillage._id});


        if(!person) return res.status(400).json({
            success:false,
            message:"Something wrong with request! Please try again!"
        })
    
          return res.status(200).json({
            success:true,
            message:'Person updated!',
            body:person
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