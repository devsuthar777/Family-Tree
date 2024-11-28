const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnect = require('./config/database');
const rootRouter = require('./routes/rootRoute');
const logger = require('./middlewares/logsMiddleware/logs');
const PORT = process.env.PORT || 4000;


const app = express();


app.use(express.json());
app.use(cors());

app.use(logger);
app.use('/api/v1',rootRouter);

app.get('/',(req,res) => {
    return res.json({
        success:true,
        message:'Family_Tree Backend Services is up and running...'
    })
});


dbConnect();

app.listen(PORT, () =>{
 
    console.log("\x1b[32mFamily-tree server started successfully at "+PORT+"\x1b[0m"); // Green text
})