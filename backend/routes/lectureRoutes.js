const express=require("express");
const router=express.Router();
const{
    getLectures,
    getLectureById,
    addLecture,
    updateLecture,
    deleteLecture,
}=require("../controllers/lectureController");
router.get("/",getLectures);
router.get("/:id",getLectureById);
router.post("/",addLecture);
router.put("/:id",updateLecture);
router.delete("/:id",deleteLecture);
module.exports=router;