

exports.validationOnCreatePerson = (req,res,next) => {
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

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
  }