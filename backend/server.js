const connectDB=require("./config/db");
const lectureRoutes=require("./routes/lectureRoutes");
const express=require("express");
const cors=require("cors");
require("dotenv").config();
console.log("MONGO_URI =",process.env.MONGO_URI);
connectDB();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/lectures",lectureRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})