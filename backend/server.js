const connectdatabase = require('../backend/config/database.js');
const express = require("express");
const app = express();
connectdatabase;
app.get("/",function(res,req){
    res.send('Complaint Register Server');
})



const PORT = 6000;

app.listen(PORT,function(){
    console.log('\x1b[35m%s\x1b[0m',`Server running on port ${PORT}`)
});