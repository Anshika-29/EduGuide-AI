const express=require("express");
const router=express.Router();
const{
    getLectures,
}=require("../controllers/lectureController");
router.get("/",getLectures);
module.exports=router;