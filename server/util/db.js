const mongoose = require("mongoose");

const URI = "mongodb+srv://swap:ransshukla04@cluster0.pjqszxt.mongodb.net/EV_ZONE?retryWrites=true&w=majority";
//mongoose.connect(URI);

//const URI=process.env.MONGODB_URI;

const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful");

    }catch(error){
        console.error("connection failed",error);
        process.exit(0);
    }
};

module.exports=connectDb;