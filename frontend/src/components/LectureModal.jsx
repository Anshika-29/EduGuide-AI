function LectureModal({lecture,setSelectedLecture}){
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn"
                 onClick={()=> setSelectedLecture(null)}>✖</button>
            <h2>{lecture.topic}</h2>
            <p><strong>Subject: </strong>{lecture.subject}</p>
            <p><strong>Instructor: </strong>{lecture.instructor}</p>
            <p><strong>Duration: </strong>{lecture.duration}</p>
            <p><strong>Rating: </strong>{lecture.rating}</p>
        </div>
        </div>
    );
}
export default LectureModal;