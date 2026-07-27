const lectures=require("../data/lectures");
function getLectures(req,res){
    res.json(lectures);
}
function getLectureById(req,res){
    const id=parseInt(req.params.id);
    const lecture=lectures.find(
        (lecture)=>lecture.id===id
    );
    if(!lecture){
        return res.status(404).json({
            message:"Lecture not found",
        });
    }
    res.json(lecture);
}
module.exports={
    getLectures,
    getLectureById,
};