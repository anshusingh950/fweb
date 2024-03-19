const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
mongoDB();
app.use((req,res,next)=>{    // For implementing CORS 
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})
app.use(express.json());        // Using different routers like registering,login,fetching data etc
app.use('/api',require("./Router/CreateUser")); 
app.use('/api',require("./Router/DisplayData")); 
app.use('/api',require("./Router/GetOrder")); 
app.use('/api',require("./Router/OrderData"));   

app.listen(port, () => {    // it will start an expess app ( HTTP server ) that listens for incoming requests on the specified port
  console.log(`Example app listening on port ${port}`)
})
