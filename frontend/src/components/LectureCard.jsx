import lectures from "../data/lectures";

function LectureCard({lecture,setSelectedLecture,setSelectedNotesLecture,setSelectedSummaryLecture,setSelectedQuizLecture,addToFavorites,removeFromFavorites,isFavorite=false}){
    return(
        <div className="card">
            <h2 className="lecture-title">📚{lecture.topic}</h2>
            <p><strong>📚Subject:</strong>{lecture.subject}</p>
            <p><strong>🎓Branch:</strong>{lecture.branch}</p>
            <p><strong>📅Year:</strong>{lecture.year}</p>
            <p><strong>Instructor:</strong>👨‍🏫{lecture.instructor}</p>
            <p><strong>Duration:</strong> ⏱{lecture.duration}</p>
            <p><strong>Language:</strong>🌍{lecture.language}</p>
            <p><strong>Difficulty:</strong>📈{lecture.difficulty}</p>
            <p><strong>Learning Goal:</strong>🎯{lecture.learningGoal}</p>
            <p><strong>Channel:</strong> {lecture.channel}</p> 
            <p><strong>Rating:</strong>⭐{lecture.rating}</p>
            <p><strong>Views:</strong>👁️{lecture.views}</p>
            <a href={lecture.link}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"> ▶ Watch on YouTube</a>
        <button
            onClick={()=>setSelectedLecture(lecture)}>
                📖 View Details
        </button>
        {isFavorite?(
            <button onClick={()=>removeFromFavorites(lecture.id)}>Remove from Favorites</button>
        ):(
            <>
        <button onClick={()=>addToFavorites(lecture)}>❤️ Add to Favorites</button>
        <button onClick={()=> setSelectedNotesLecture(lecture)}>Notes</button>
        <button onClick={()=> setSelectetdSummaryLecture(lecture)}>Summary</button>
        <button onClick={()=> setSelectedQuizLecture(lecture)}>Quiz</button>
        </>
        )
    }
        </div>
    );
}
export default LectureCard;