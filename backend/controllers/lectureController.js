const lectures=require("../data/lectures");
function getLectures(req,res){
    res.json(lectures);
}
module.exports={
    getLectures,
};