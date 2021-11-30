const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("server is listining");
})

app.listen(3000,console.log("backend is running on port 3000"));