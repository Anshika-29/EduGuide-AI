const mongoose=require("mongoose");
const lectureSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    branch:{
        typr:String,
        required:true,
    },
    year :{
        type:Number,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    faculty:{
        type:String,
        required:true,
    },
    youTubeLink:{
        type:String,
        required:true,
    },
});
const Lecture=mongoose.model("Lecture",lectureSchema);
module.exports=Lecture;