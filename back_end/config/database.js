const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=> console.log("Family Tree DB conntected successfully!"))
    .catch((error)=>{
        console.log("Issue with connecting to DB");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;