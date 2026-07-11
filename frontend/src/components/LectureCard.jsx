function LectureCard({title,subject,branch,year,channel,rating,views,link,instructor,duration,language,difficulty,learningGoal}){
    return(
        <div className="card">
            <h2 className="lecture-title">📚{title}</h2>
            <p><strong>📚Subject:</strong>{subject}</p>
            <p><strong>🎓Branch:</strong>{branch}</p>
            <p><strong>📅Year:</strong>{year}</p>
            <p><strong>Instructor:</strong>👨‍🏫{instructor}</p>
            <p><strong>Duration:</strong> ⏱{duration}</p>
            <p><strong>Language:</strong>🌍{language}</p>
            <p><strong>Difficulty:</strong>📈{difficulty}</p>
            <p><strong>Learning Goal:</strong>🎯{learningGoal}</p>
            <p><strong>Channel:</strong> {channel}</p> 
            <p><strong>Rating:</strong>⭐{rating}</p>
            <p><strong>Views:</strong>👁️{views}</p>
            <a href={link}
            target="_blank"
            rel="noopener noreffer"
            className="watch-btn"> ▶ Watch on YouTube</a>
        </div>
    );
}
export default LectureCard;