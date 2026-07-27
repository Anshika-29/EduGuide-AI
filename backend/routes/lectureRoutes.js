const express=require("express");
const router=express.Router();
const{
    getLectures,
    getLectureById,
}=require("../controllers/lectureController");
router.get("/",getLectures);
router.get("/:id",getLectureById);
module.exports=router;