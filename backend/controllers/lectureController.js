const Lecture = require("../models/Lecture");
const getLectures=async(req,res)=>{
    try{
        const lectures=await Lecture.find();
        res.json(lectures);
    }
    catch(error){
        res.status(500).json({
            message:"Error fetching lectures",
            error:error.message,
        });
    }
};
const getLectureById=async(req,res)=>{
    try{
        const lecture=await Lecture.findById(req.params.id);
        if(!lecture){
            return res.status(404).json({
                message:"LEcture not found",
            });
        }
        res.json(lecture);
    }
    catch(error){
        res.status(500).json({
            message:"Error fetching lecture",
            error:error.message,
        });
    }
};
const addLecture =async(req,res)=>{
    try{
        const newLecture=await Lecture.create(req.body);
        res.status(201).json({
            message:"Lecture added successfully",
            lecture:newLecture,
        });
    }catch(error){
        res.status(500).json({
            message:"Error adding lecture",
            error:error.message,
        });
    }
};
const updateLecture =async(req,res)=>{
    try{
        const lecture=await Lecture.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!lecture){
            return res.status(404).json({
                message:"Lecture not found",
            });
        }
        res.json({
            message:"Lecture updated successfully",
            lecture: lecture,
        });
    }catch(error){
        res.status(500).json({
            message:"Error updating lecture",
            error :error.message,
        });
    }
};
const deleteLecture=async(req,res)=>{
    try{
        const lecture=await Lecture.findByIdAndDelete(req.params.id);
        if(!lecture){
            return res.status(404).json({
                message:"Lecture not found",
            });
        }
        res.json({
            message:"Lecture deleted successfully",
            lecture :lecture,
        });
    }catch(error){
        res.status(500).json({
            message:"Error deleting lecture",
            error:error.message,
        });
    }
};
module.exports={
    getLectures,
    getLectureById,
    addLecture,
    updateLecture,
    deleteLecture,
};