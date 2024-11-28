const { v4: uuidv4 } = require('uuid'); // Importing v4 method from uuid package


logger = (req,res,next) => {
 
  req.uniqueRequestId = uuidv4();

  const {method,url,headers,body} = req;
  console.log(`\n=== Incoming Request : ${req.uniqueRequestId} ===`);
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log(`Headers: ${JSON.stringify(headers, null, 2)}`);
  console.log(`Body: ${JSON.stringify(body, null, 2)}`);

  const originalSend = res.send; // Store the original `res.send` method
  const startTime = Date.now(); 
  res.uniqueRequestId = req.uniqueRequestId;


  res.send = function (body) {

    const endTime = Date.now();
    
    console.log(`\n=== Outgoing Response : ${res.uniqueRequestId}===`);
    console.log("Processing time: ",endTime-startTime);
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${JSON.stringify(JSON.parse(body),null,2)}`);

    // Call the original `res.send` with the body
    return originalSend.call(this, body);
  };

  next();

}

module.exports = logger;
