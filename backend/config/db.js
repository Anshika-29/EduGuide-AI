const dns=require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);
const mongoose=require("mongoose");
const connectDB=async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    }catch(error){
        console.error("MongoDB Connection Failed");
        console.error(error);
        console.log("Server will continue without MongoDB");
    }
};
module.exports=connectDB;