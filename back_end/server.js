const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4000;


const app = express();


app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    return res.json({
        success:true,
        message:'Family_Tree Backend Services is up and running...'
    })
});


app.listen(PORT, () =>{
    console.log("family-tree server started successfully at "+PORT);
})