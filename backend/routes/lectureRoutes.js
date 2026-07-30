const express=require("express");
const router=express.Router();
const{
    getLectures,
    getLectureById,
    addLecture,
}=require("../controllers/lectureController");
router.get("/",getLectures);
router.get("/:id",getLectureById);
router.post("/",addLecture);
module.exports=router;