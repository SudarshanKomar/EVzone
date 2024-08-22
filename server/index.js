require("dotenv").config();
const express = require("express");
const app = express();
const router=require('./router/auth-router');
const connectDb=require('./util/db');
const cors=require("cors");

const corsOption={
    origin:"http://localhost:3000",
    method:"GET ,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

//lets takle cors
app.use(cors(corsOption));
app.use(express.json());

app.use("/",router);

app.listen(5000,()=>{
    console.log("server is running");
})

connectDb().then(()=>{
    app.listen(5001,()=>
    {
        console.log("sserver is running");
    })
});

