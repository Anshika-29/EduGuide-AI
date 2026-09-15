function LectureModal({lecture,setSelectedLecture}){
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn"
                 onClick={()=> setSelectedLecture(null)}>✖</button>
            <h2>{lecture.topic}</h2>
            <p><strong>Subject: </strong>{lecture.subject}</p>
            <p><strong>Branch:</strong>{lecture.branch}</p>
            <p><strong>Year:</strong>{lecture.year}</p>
            <p><strong>Learning Goal:</strong>{lecture.learningGoal}</p>
            <p><strong>Difficulty:</strong>{lecture.difficulty}</p>
            <p><strong>Language:</strong>{lecture.language}</p>
            <p><strong>Instructor: </strong>{lecture.instructor}</p>
            <p><strong>Channel:</strong>{lecture.channel}</p>
            <p><strong>Duration: </strong>{lecture.duration}</p>
            <p><strong>Rating: </strong>⭐ {lecture.rating}</p>
            <p><strong>Views:</strong>👁️ {lecture.view}</p>
            <a href={lecture.youTubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn">
              ▶ Watch on YouTube  
            </a>
        </div>
        </div>
    ); 
}
export default LectureModal;