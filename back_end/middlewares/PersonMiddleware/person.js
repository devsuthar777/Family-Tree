const mongoose = require("mongoose");

exports.validationOnCreatePerson = (req,res,next) => {

    //console.log(req.body);
    const {name,gender,birthOrder,dob,occupation,father,lineage,nativePlace,mother,brothers,sisters,spouse} = req.body;

    if(!name) return res.status(400).json({
        success:false,
        message:"Name is required!"
    })
    else if(!gender) return res.status(400).json({
        success:false,
        message:"Gender is required!"
    })
    else if(gender!= "male" && gender!= "female") return res.status(400).json({
        success:false,
        message:"Invalid gender!"
    })
    else if(!birthOrder) return res.status(400).json({
        success:false,
        message:"BirthOrder is required!"
    })
    else if(!(/^([1-9]|10)$/).test(birthOrder)) return res.status(400).json({
        success:false,
        message:"Invalid birthOrder!"
    }) 
    else if(!dob) return res.status(400).json({
        success:false,
        message:"DOB is required!"
    })
    else if(!isDateValid(dob)) return res.status(400).json({
        success:false,
        message:"Invalid DOB!"
    })
    else if(!lineage) return res.status(400).json({
        success:false,
        message:"Lineage is required!"
    })
    else if(!nativePlace) return res.status(400).json({
        success:false,
        message: "Birth Place required!"
    })
      
    next();
}


exports.validationOnUpdatePerson = (req,res,next) => {

    //console.log(req.body);
    const {name,gender,birthOrder,dob,occupation,father,lineage,nativePlace,mother,brothers,sisters,spouse} = req.body;

    if(!name) return res.status(400).json({
        success:false,
        message:"Name is required!"
    })
    else if(!gender) return res.status(400).json({
        success:false,
        message:"Gender is required!"
    })
    else if(gender!= "male" && gender!= "female") return res.status(400).json({
        success:false,
        message:"Invalid gender!"
    })
    else if(!birthOrder) return res.status(400).json({
        success:false,
        message:"BirthOrder is required!"
    })
    else if(!(/^([1-9]|10)$/).test(birthOrder)) return res.status(400).json({
        success:false,
        message:"Invalid birthOrder!"
    }) 
    else if(!dob) return res.status(400).json({
        success:false,
        message:"DOB is required!"
    })
    else if(!isDateValid(dob)) return res.status(400).json({
        success:false,
        message:"Invalid DOB!"
    })
    else if(!lineage) return res.status(400).json({
        success:false,
        message:"Lineage is required!"
    })
    else if(!nativePlace) return res.status(400).json({
        success:false,
        message: "Birth Place required!"
    })
    else if(brothers && !validArrayList(brothers)) return res.status(400).json({
        success:false,
        message:"invalid formate or ID of brothers"
    }) 
    else if(sisters && !validArrayList(sisters)) return res.status(400).json({
        success:false,
        message:"invalid Formate or ID of sisters"
    }) 
      
    next();
}

function validArrayList(list){
   return Array.isArray(list) && list.filter(id => mongoose.Types.ObjectId.isValid(id)).length == list.length;
}

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
  }